/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTOpt, NFTOptInterface } from "../../contracts/NFTOpt";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Fallback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "NewRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "cancelOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "createOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "exerciseOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optionID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "nftId",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "startDate",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "interval",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "enum NFTOpt.OptionFlavor",
        name: "flavor",
        type: "uint8",
      },
      {
        internalType: "enum NFTOpt.OptionState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_nftId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_interval",
        type: "uint32",
      },
      {
        internalType: "enum NFTOpt.OptionFlavor",
        name: "_flavor",
        type: "uint8",
      },
    ],
    name: "publishOptionRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "withdrawOptionRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061126f806100206000396000f3fe60806040526004361061007f5760003560e01c80635a3ddf221161004e5780635a3ddf22146101b25780636e89319a146101ce578063d0a3021e146101ea578063dd3ebfd414610206576100bf565b806312065fe0146100fa57806318b7edeb14610125578063292a274f14610150578063409e22051461016c576100bf565b366100bf577f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587433346040516100b59291906109e9565b60405180910390a1005b7ffbf15a1bae5e021d024841007b692b167afd2a281a4ff0b44f47387eb388205c33346040516100f09291906109e9565b60405180910390a1005b34801561010657600080fd5b5061010f610222565b60405161011c9190610a12565b60405180910390f35b34801561013157600080fd5b5061013a61022a565b6040516101479190610a12565b60405180910390f35b61016a60048036038101906101659190610a6e565b610230565b005b34801561017857600080fd5b50610193600480360381019061018e9190610ac7565b610233565b6040516101a99a99989796959493929190610bc2565b60405180910390f35b6101cc60048036038101906101c79190610a6e565b610331565b005b6101e860048036038101906101e39190610a6e565b610334565b005b61020460048036038101906101ff9190610a6e565b610337565b005b610220600480360381019061021b9190610caf565b61033a565b005b600047905090565b60005481565b50565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900463ffffffff16908060020160189054906101000a900463ffffffff169080600201601c9054906101000a900463ffffffff16908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff1690508a565b50565b50565b50565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036103a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a090610dad565b60405180910390fd5b60008463ffffffff16116103f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e990610e19565b60405180910390fd5b6103fb856108dc565b61043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043190610eab565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16636352211e866040518263ffffffff1660e01b815260040161048a9190610f06565b602060405180830381865afa1580156104a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cb9190610f36565b73ffffffffffffffffffffffffffffffffffffffff1614610521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051890610ffb565b60405180910390fd5b60003411610564576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055b90611067565b60405180910390fd5b600083116105a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e906110d3565b60405180910390fd5b60008263ffffffff16116105f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e79061113f565b60405180910390fd5b6040518061014001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018563ffffffff168152602001600063ffffffff1681526020018363ffffffff16815260200134815260200184815260200182600181111561069557610694610b03565b5b8152602001600060028111156106ae576106ad610b03565b5b8152506001600080600081546106c39061118e565b919050819055815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548163ffffffff021916908363ffffffff16021790555060808201518160020160186101000a81548163ffffffff021916908363ffffffff16021790555060a082015181600201601c6101000a81548163ffffffff021916908363ffffffff16021790555060c0820151816003015560e082015181600401556101008201518160050160006101000a81548160ff0219169083600181111561086157610860610b03565b5b02179055506101208201518160050160016101000a81548160ff0219169083600281111561089257610891610b03565b5b02179055509050507f09ade4ab65fc69d5629748282653ae32dedf754cecbe7a71b31c153f8675de78336000546040516108cd9291906109e9565b60405180910390a15050505050565b60008060007f6352211e6566aa027e75ac9dbf2423197fbd9b82b9d981a3ab367d355866aa1c6000604051602401610914919061121e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000808251602084016000886000f19150811592505050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109ba8261098f565b9050919050565b6109ca816109af565b82525050565b6000819050919050565b6109e3816109d0565b82525050565b60006040820190506109fe60008301856109c1565b610a0b60208301846109da565b9392505050565b6000602082019050610a2760008301846109da565b92915050565b600080fd5b600063ffffffff82169050919050565b610a4b81610a32565b8114610a5657600080fd5b50565b600081359050610a6881610a42565b92915050565b600060208284031215610a8457610a83610a2d565b5b6000610a9284828501610a59565b91505092915050565b610aa4816109d0565b8114610aaf57600080fd5b50565b600081359050610ac181610a9b565b92915050565b600060208284031215610add57610adc610a2d565b5b6000610aeb84828501610ab2565b91505092915050565b610afd81610a32565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610b4357610b42610b03565b5b50565b6000819050610b5482610b32565b919050565b6000610b6482610b46565b9050919050565b610b7481610b59565b82525050565b60038110610b8b57610b8a610b03565b5b50565b6000819050610b9c82610b7a565b919050565b6000610bac82610b8e565b9050919050565b610bbc81610ba1565b82525050565b600061014082019050610bd8600083018d6109c1565b610be5602083018c6109c1565b610bf2604083018b6109c1565b610bff606083018a610af4565b610c0c6080830189610af4565b610c1960a0830188610af4565b610c2660c08301876109da565b610c3360e08301866109da565b610c41610100830185610b6b565b610c4f610120830184610bb3565b9b9a5050505050505050505050565b610c67816109af565b8114610c7257600080fd5b50565b600081359050610c8481610c5e565b92915050565b60028110610c9757600080fd5b50565b600081359050610ca981610c8a565b92915050565b600080600080600060a08688031215610ccb57610cca610a2d565b5b6000610cd988828901610c75565b9550506020610cea88828901610a59565b9450506040610cfb88828901610ab2565b9350506060610d0c88828901610a59565b9250506080610d1d88828901610c9a565b9150509295509295909350565b600082825260208201905092915050565b7f4e465420636f6e7472616374206d75737420626520612076616c69642061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610d97602483610d2a565b9150610da282610d3b565b604082019050919050565b60006020820190508181036000830152610dc681610d8a565b9050919050565b7f4e465420746f6b656e204944206d757374206265203e20300000000000000000600082015250565b6000610e03601883610d2a565b9150610e0e82610dcd565b602082019050919050565b60006020820190508181036000830152610e3281610df6565b9050919050565b7f50726f7669646564204e465420636f6e74726163742061646472657373206d7560008201527f737420696d706c656d656e74204552432d37323120696e746572666163650000602082015250565b6000610e95603e83610d2a565b9150610ea082610e39565b604082019050919050565b60006020820190508181036000830152610ec481610e88565b9050919050565b6000819050919050565b6000610ef0610eeb610ee684610a32565b610ecb565b6109d0565b9050919050565b610f0081610ed5565b82525050565b6000602082019050610f1b6000830184610ef7565b92915050565b600081519050610f3081610c5e565b92915050565b600060208284031215610f4c57610f4b610a2d565b5b6000610f5a84828501610f21565b91505092915050565b7f4f776e657273686970206f6620737065636966696564204e465420746f6b656e60008201527f20697320756e646572206120646966666572656e742077616c6c65742074686160208201527f6e207468652063616c6c65722773000000000000000000000000000000000000604082015250565b6000610fe5604e83610d2a565b9150610ff082610f63565b606082019050919050565b6000602082019050818103600083015261101481610fd8565b9050919050565b7f5072656d69756d206d757374206265203e203000000000000000000000000000600082015250565b6000611051601383610d2a565b915061105c8261101b565b602082019050919050565b6000602082019050818103600083015261108081611044565b9050919050565b7f537472696b65207072696365206d757374206265203e20300000000000000000600082015250565b60006110bd601883610d2a565b91506110c882611087565b602082019050919050565b600060208201905081810360008301526110ec816110b0565b9050919050565b7f45787069726174696f6e20696e74657276616c206d757374206265203e203000600082015250565b6000611129601f83610d2a565b9150611134826110f3565b602082019050919050565b600060208201905081810360008301526111588161111c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611199826109d0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111cb576111ca61115f565b5b600182019050919050565b6000819050919050565b600060ff82169050919050565b60006112086112036111fe846111d6565b610ecb565b6111e0565b9050919050565b611218816111ed565b82525050565b6000602082019050611233600083018461120f565b9291505056fea26469706673582212203356cb239e6947378a6ea33e73448797127527a5159d15cde18cb0f208af818964736f6c634300080e0033";

type NFTOptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTOptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTOpt__factory extends ContractFactory {
  constructor(...args: NFTOptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTOpt> {
    return super.deploy(overrides || {}) as Promise<NFTOpt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTOpt {
    return super.attach(address) as NFTOpt;
  }
  override connect(signer: Signer): NFTOpt__factory {
    return super.connect(signer) as NFTOpt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTOptInterface {
    return new utils.Interface(_abi) as NFTOptInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFTOpt {
    return new Contract(address, _abi, signerOrProvider) as NFTOpt;
  }
}
