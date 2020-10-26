import {task} from '@nomiclabs/buidler/config';
import {
  getLendingPoolAddressesProvider,
  deployPriceOracle,
  getMockedTokens,
  getPairsTokenAggregator,
  deployChainlinkProxyPriceProvider,
  deployLendingRateOracle,
  getAllMockedTokens,
} from '../../helpers/contracts-helpers';

import {
  setInitialAssetPricesInOracle,
  setInitialMarketRatesInRatesOracle,
  deployAllMockAggregators,
} from '../../helpers/oracles-helpers';
import {ICommonConfiguration, iAssetBase, TokenContractId} from '../../helpers/types';
import {waitForTx} from '../../helpers/misc-utils';
import {getAllAggregatorsAddresses, getAllTokenAddresses} from '../../helpers/mock-helpers';
import {ConfigNames, loadPoolConfig} from '../../helpers/configuration';

task('dev:deploy-oracles', 'Deploy oracles for dev enviroment')
  .addOptionalParam('verify', 'Verify contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({verify, pool}, localBRE) => {
    await localBRE.run('set-bre');
    const poolConfig = loadPoolConfig(pool);
    const {
      Mocks: {ChainlinkAggregatorPrices, AllAssetsInitialPrices},
      ProtocolGlobalParams: {UsdAddress, MockUsdPriceInWei},
      LendingRateOracleRatesCommon,
    } = poolConfig as ICommonConfiguration;

    const defaultTokenList = {
      ...Object.fromEntries(Object.keys(TokenContractId).map((symbol) => [symbol, ''])),
      USD: UsdAddress,
    } as iAssetBase<string>;
    const mockTokens = await getAllMockedTokens();
    const mockTokensAddress = Object.keys(mockTokens).reduce<iAssetBase<string>>((prev, curr) => {
      prev[curr as keyof iAssetBase<string>] = mockTokens[curr].address;
      return prev;
    }, defaultTokenList);
    const addressesProvider = await getLendingPoolAddressesProvider();

    const fallbackOracle = await deployPriceOracle(verify);
    await waitForTx(await fallbackOracle.setEthUsdPrice(MockUsdPriceInWei));
    await setInitialAssetPricesInOracle(AllAssetsInitialPrices, mockTokensAddress, fallbackOracle);

    const mockAggregators = await deployAllMockAggregators(ChainlinkAggregatorPrices, verify);

    const allTokenAddresses = getAllTokenAddresses(mockTokens);
    const allAggregatorsAddresses = getAllAggregatorsAddresses(mockAggregators);

    const [tokens, aggregators] = getPairsTokenAggregator(
      allTokenAddresses,
      allAggregatorsAddresses
    );

    await deployChainlinkProxyPriceProvider([tokens, aggregators, fallbackOracle.address], verify);
    await waitForTx(await addressesProvider.setPriceOracle(fallbackOracle.address));

    const lendingRateOracle = await deployLendingRateOracle(verify);
    await waitForTx(await addressesProvider.setLendingRateOracle(lendingRateOracle.address));

    const {USD, ...tokensAddressesWithoutUsd} = allTokenAddresses;
    const allReservesAddresses = {
      ...tokensAddressesWithoutUsd,
    };
    await setInitialMarketRatesInRatesOracle(
      LendingRateOracleRatesCommon,
      allReservesAddresses,
      lendingRateOracle
    );
  });