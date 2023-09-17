/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { DeadManSwitch, DeadManSwitchInterface } from "../DeadManSwitch";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_presetAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Alive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "still_alive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103bc3803806103bc83398181016040528101906100329190610123565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504360028190555050610150565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100f0826100c5565b9050919050565b610100816100e5565b811461010b57600080fd5b50565b60008151905061011d816100f7565b92915050565b600060208284031215610139576101386100c0565b5b60006101478482850161010e565b91505092915050565b61025d8061015f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632de694d0146100465780633c68eb81146100645780633d58225a1461006e575b600080fd5b61004e610078565b60405161005b919061019f565b60405180910390f35b61006c6100a0565b005b610076610123565b005b6000600a6002544361008a91906101f3565b11610098576001905061009d565b600090505b90565b6100a8610078565b156100b257600080fd5b6000479050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561011f573d6000803e3d6000fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461017b57600080fd5b43600281905550565b60008115159050919050565b61019981610184565b82525050565b60006020820190506101b46000830184610190565b92915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101fe826101ba565b9150610209836101ba565b9250828203905081811115610221576102206101c4565b5b9291505056fea26469706673582212207f318bf7a9018a31b17175e5b8323e147296f6c0ac9f0c028d4196d0b4b1759064736f6c63430008130033";

type DeadManSwitchConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeadManSwitchConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeadManSwitch__factory extends ContractFactory {
  constructor(...args: DeadManSwitchConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _presetAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_presetAddress, overrides || {});
  }
  override deploy(
    _presetAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_presetAddress, overrides || {}) as Promise<
      DeadManSwitch & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DeadManSwitch__factory {
    return super.connect(runner) as DeadManSwitch__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeadManSwitchInterface {
    return new Interface(_abi) as DeadManSwitchInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DeadManSwitch {
    return new Contract(address, _abi, runner) as unknown as DeadManSwitch;
  }
}
