/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MockBusd } from "./MockBusd";

export class MockBusdFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<MockBusd> {
    return super.deploy(overrides) as Promise<MockBusd>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): MockBusd {
    return super.attach(address) as MockBusd;
  }
  connect(signer: Signer): MockBusdFactory {
    return super.connect(signer) as MockBusdFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBusd {
    return new Contract(address, _abi, signerOrProvider) as MockBusd;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
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
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405180604001604052806004815260200163109554d160e21b8152506040518060400160405280600b81526020016a109a5b985b98d9481554d160aa1b81525060128282816003908051906020019061006c9291906100c0565b5080516100809060049060208401906100c0565b50506005805460ff19166012179055506100a2816001600160e01b036100aa16565b50505061015b565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010157805160ff191683800117855561012e565b8280016001018555821561012e579182015b8281111561012e578251825591602001919060010190610113565b5061013a92915061013e565b5090565b61015891905b8082111561013a5760008155600101610144565b90565b610b488061016a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461021057806395d89b4114610236578063a0712d681461023e578063a457c2d71461025b578063a9059cbb14610287578063dd62ed3e146102b3576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c657806339509351146101e4575b600080fd5b6100c16102e1565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b038135169060200135610377565b604080519115158252519081900360200190f35b61017e610394565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b0381358116916020810135909116906040013561039a565b6101ce610427565b6040805160ff9092168252519081900360200190f35b610162600480360360408110156101fa57600080fd5b506001600160a01b038135169060200135610430565b61017e6004803603602081101561022657600080fd5b50356001600160a01b0316610484565b6100c161049f565b6101626004803603602081101561025457600080fd5b5035610500565b6101626004803603604081101561027157600080fd5b506001600160a01b038135169060200135610514565b6101626004803603604081101561029d57600080fd5b506001600160a01b038135169060200135610582565b61017e600480360360408110156102c957600080fd5b506001600160a01b0381358116916020013516610596565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050905090565b600061038b6103846105c1565b84846105c5565b50600192915050565b60025490565b60006103a78484846106b1565b61041d846103b36105c1565b61041885604051806060016040528060288152602001610a7d602891396001600160a01b038a166000908152600160205260408120906103f16105c1565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61081816565b6105c5565b5060019392505050565b60055460ff1690565b600061038b61043d6105c1565b84610418856001600061044e6105c1565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6108af16565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561036d5780601f106103425761010080835404028352916020019161036d565b600061050c3383610910565b506001919050565b600061038b6105216105c1565b8461041885604051806060016040528060258152602001610aee602591396001600061054b6105c1565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61081816565b600061038b61058f6105c1565b84846106b1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b03831661060a5760405162461bcd60e51b8152600401808060200182810382526024815260200180610aca6024913960400191505060405180910390fd5b6001600160a01b03821661064f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610a356022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106f65760405162461bcd60e51b8152600401808060200182810382526025815260200180610aa56025913960400191505060405180910390fd5b6001600160a01b03821661073b5760405162461bcd60e51b8152600401808060200182810382526023815260200180610a126023913960400191505060405180910390fd5b610746838383610a0c565b61078981604051806060016040528060268152602001610a57602691396001600160a01b038616600090815260208190526040902054919063ffffffff61081816565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107be908263ffffffff6108af16565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108a75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561086c578181015183820152602001610854565b50505050905090810190601f1680156108995780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610909576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b03821661096b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61097760008383610a0c565b60025461098a908263ffffffff6108af16565b6002556001600160a01b0382166000908152602081905260409020546109b6908263ffffffff6108af16565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209036ef75e7cc780d1302719579b0c0b11a8a3ac5565964bf64994bcc34c9817864736f6c63430006080033";
