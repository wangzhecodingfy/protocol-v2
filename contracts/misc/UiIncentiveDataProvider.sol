// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {ILendingPoolAddressesProvider} from '../interfaces/ILendingPoolAddressesProvider.sol';
import {IAaveIncentivesController} from '../interfaces/IAaveIncentivesController.sol';
import {IUiIncentiveDataProvider} from './interfaces/IUiIncentiveDataProvider.sol';
import {ILendingPool} from '../interfaces/ILendingPool.sol';
import {IAToken} from '../interfaces/IAToken.sol';
import {IVariableDebtToken} from '../interfaces/IVariableDebtToken.sol';
import {IStableDebtToken} from '../interfaces/IStableDebtToken.sol';
import {UserConfiguration} from '../protocol/libraries/configuration/UserConfiguration.sol';
import {DataTypes} from '../protocol/libraries/types/DataTypes.sol';

contract UiIncentiveDataProvider is IUiIncentiveDataProvider {
  using UserConfiguration for DataTypes.UserConfigurationMap;

  constructor() public {}

  function getFullReservesIncentiveData(ILendingPoolAddressesProvider provider, address user)
    external
    view
    override
    returns (AggregatedReserveIncentiveData[] memory, UserReserveIncentiveData[] memory)
  {
    return (_getReservesIncentivesData(provider), _getUserReservesIncentivesData(provider, user));
  }

  function getReservesIncentivesData(ILendingPoolAddressesProvider provider)
    external
    view
    override
    returns (AggregatedReserveIncentiveData[] memory)
  {
    return _getReservesIncentivesData(provider);
  }

  function _getReservesIncentivesData(ILendingPoolAddressesProvider provider)
    private
    view
    returns (AggregatedReserveIncentiveData[] memory)
  {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();
    AggregatedReserveIncentiveData[] memory reservesIncentiveData =
      new AggregatedReserveIncentiveData[](reserves.length);

    for (uint256 i = 0; i < reserves.length; i++) {
      AggregatedReserveIncentiveData memory reserveIncentiveData = reservesIncentiveData[i];
      reserveIncentiveData.underlyingAsset = reserves[i];

      DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

      IAaveIncentivesController aTokenIncentiveController =
        IAToken(baseData.aTokenAddress).getIncentivesController();

      (
        uint256 aEmissionPerSecond,
        uint256 aIncentivesLastUpdateTimestamp,
        uint256 aTokenIncentivesIndex
      ) = aTokenIncentiveController.assets(baseData.aTokenAddress);

      reserveIncentiveData.aIncentiveData = IncentiveData(
        aEmissionPerSecond,
        aIncentivesLastUpdateTimestamp,
        aTokenIncentivesIndex,
        aTokenIncentiveController.DISTRIBUTION_END(),
        baseData.aTokenAddress,
        aTokenIncentiveController.REWARD_TOKEN()
      );

      IAaveIncentivesController sTokenIncentiveController =
        IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController();

      (
        uint256 sEmissionPerSecond,
        uint256 sIncentivesLastUpdateTimestamp,
        uint256 sTokenIncentivesIndex
      ) = sTokenIncentiveController.assets(baseData.stableDebtTokenAddress);

      reserveIncentiveData.sIncentiveData = IncentiveData(
        sEmissionPerSecond,
        sIncentivesLastUpdateTimestamp,
        sTokenIncentivesIndex,
        sTokenIncentiveController.DISTRIBUTION_END(),
        baseData.stableDebtTokenAddress,
        sTokenIncentiveController.REWARD_TOKEN()
      );

      IAaveIncentivesController vTokenIncentiveController =
        IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController();

      (
        uint256 vEmissionPerSecond,
        uint256 vIncentivesLastUpdateTimestamp,
        uint256 vTokenIncentivesIndex
      ) = vTokenIncentiveController.assets(baseData.variableDebtTokenAddress);

      reserveIncentiveData.vIncentiveData = IncentiveData(
        vEmissionPerSecond,
        vIncentivesLastUpdateTimestamp,
        vTokenIncentivesIndex,
        vTokenIncentiveController.DISTRIBUTION_END(),
        baseData.variableDebtTokenAddress,
        vTokenIncentiveController.REWARD_TOKEN()
      );
    }

    return (reservesIncentiveData);
  }

  function getUserReservesIncentivesData(ILendingPoolAddressesProvider provider, address user)
    external
    view
    override
    returns (UserReserveIncentiveData[] memory)
  {
    return _getUserReservesIncentivesData(provider, user);
  }

  function _getUserReservesIncentivesData(ILendingPoolAddressesProvider provider, address user)
    private
    view
    returns (UserReserveIncentiveData[] memory)
  {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();

    UserReserveIncentiveData[] memory userReservesIncentivesData =
      new UserReserveIncentiveData[](user != address(0) ? reserves.length : 0);

    for (uint256 i = 0; i < reserves.length; i++) {
      DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

      // user reserve data
      userReservesIncentivesData[i].underlyingAsset = reserves[i];

      IAaveIncentivesController aTokenIncentiveController =
        IAToken(baseData.aTokenAddress).getIncentivesController();

      IUiIncentiveDataProvider.UserIncentiveData memory aUserIncentiveData;
      aUserIncentiveData.tokenIncentivesUserData = aTokenIncentiveController.getUserAssetData(
        user,
        baseData.aTokenAddress
      );
      aUserIncentiveData.userUnclaimedRewards = aTokenIncentiveController.getUserUnclaimedRewards(
        user
      );
      aUserIncentiveData.tokenAddress = baseData.aTokenAddress;
      aUserIncentiveData.rewardTokenAddress = aTokenIncentiveController.REWARD_TOKEN();

      userReservesIncentivesData[i].aTokenIncentivesUserData = aUserIncentiveData;

      IAaveIncentivesController vTokenIncentiveController =
        IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController();
      UserIncentiveData memory vUserIncentiveData;
      vUserIncentiveData.tokenIncentivesUserData = vTokenIncentiveController.getUserAssetData(
        user,
        baseData.variableDebtTokenAddress
      );
      vUserIncentiveData.userUnclaimedRewards = vTokenIncentiveController.getUserUnclaimedRewards(
        user
      );
      vUserIncentiveData.tokenAddress = baseData.variableDebtTokenAddress;
      vUserIncentiveData.rewardTokenAddress = vTokenIncentiveController.REWARD_TOKEN();

      userReservesIncentivesData[i].vTokenIncentivesUserData = vUserIncentiveData;

      IAaveIncentivesController sTokenIncentiveController =
        IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController();
      UserIncentiveData memory sUserIncentiveData;
      sUserIncentiveData.tokenIncentivesUserData = sTokenIncentiveController.getUserAssetData(
        user,
        baseData.stableDebtTokenAddress
      );
      sUserIncentiveData.userUnclaimedRewards = sTokenIncentiveController.getUserUnclaimedRewards(
        user
      );
      sUserIncentiveData.tokenAddress = baseData.stableDebtTokenAddress;
      sUserIncentiveData.rewardTokenAddress = sTokenIncentiveController.REWARD_TOKEN();

      userReservesIncentivesData[i].sTokenIncentivesUserData = sUserIncentiveData;
    }

    return (userReservesIncentivesData);
  }
}