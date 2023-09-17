/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "DeadManSwitch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DeadManSwitch__factory>;
    getContractFactory(
      name: "DeadManSwitch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DeadManSwitch__factory>;

    getContractAt(
      name: "DeadManSwitch",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DeadManSwitch>;
    getContractAt(
      name: "DeadManSwitch",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DeadManSwitch>;

    deployContract(
      name: "DeadManSwitch",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DeadManSwitch>;
    deployContract(
      name: "DeadManSwitch",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DeadManSwitch>;

    deployContract(
      name: "DeadManSwitch",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DeadManSwitch>;
    deployContract(
      name: "DeadManSwitch",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DeadManSwitch>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
