/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { FeeProvider } from "./FeeProvider";

export class FeeProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<FeeProvider> {
    return super.deploy(overrides) as Promise<FeeProvider>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): FeeProvider {
    return super.attach(address) as FeeProvider;
  }
  connect(signer: Signer): FeeProviderFactory {
    return super.connect(signer) as FeeProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeProvider {
    return new Contract(address, _abi, signerOrProvider) as FeeProvider;
  }
}

const _abi = [
  {
    inputs: [],
    name: "FEE_PROVIDER_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "calculateLoanOriginationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLoanOriginationFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressesProvider",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "originationFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50610411806100246000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80639403ed3a1461005c578063b0d73d4e14610076578063c211f9a41461007e578063c4d66de814610086578063e563a7d0146100ae575b600080fd5b6100646100da565b60408051918252519081900360200190f35b6100646100e0565b6100646100e5565b6100ac6004803603602081101561009c57600080fd5b50356001600160a01b03166100eb565b005b610064600480360360408110156100c457600080fd5b506001600160a01b038135169060200135610193565b60345481565b600181565b60345490565b60006100f56101b3565b60015490915060ff168061010c575061010c6101b8565b80610118575060005481115b6101535760405162461bcd60e51b815260040180806020018281038252602e8152602001806103ae602e913960400191505060405180910390fd5b60015460ff16158015610172576001805460ff19168117905560008290555b6608e1bc9bf04000603455801561018e576001805460ff191690555b505050565b60006101aa603454836101be90919063ffffffff16565b90505b92915050565b600190565b303b1590565b60006101aa670de0b6b3a76400006101ee6101df868663ffffffff6101fa16565b6706f05b59d3b2000090610253565b9063ffffffff6102ad16565b600082610209575060006101ad565b8282028284828161021657fe5b04146101aa5760405162461bcd60e51b815260040180806020018281038252602181526020018061038d6021913960400191505060405180910390fd5b6000828201838110156101aa576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006101aa83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836103765760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561033b578181015183820152602001610323565b50505050905090810190601f1680156103685780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161038257fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a2646970667358221220b6d286d1f0b82789105155b663f2705ed827df2cb1cad4c6923082f530bb3d2264736f6c63430006080033";
