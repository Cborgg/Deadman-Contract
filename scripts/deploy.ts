import { ethers } from "hardhat";

/*async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});*/
const { ethers } = require('ethers');
const ALCHEMY_API_KEY="LH2MON4fXOIv5X88wOBOn1X2mlVDUfpl";
async function deployContract() {
    //const provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}'); // Replace with your Infura Project ID
    const privateKey = 'eac5cfdc677e2b00dcdffcf1d6ce3d11d149ab44792f3ef5f04cf1e7b01b4c19'; // Replace with your Ethereum account's private key
    const wallet = new ethers.Wallet(privateKey, provider);

    const presetAddress = '0x1268AD189526AC0b386faF06eFfC46779c340eE6'; // Replace with the preset Ethereum address

    const contractFactory = new ethers.ContractFactory(
        [
            'constructor(address)',
            'function still_alive() public',
            'function Alive() public view returns (bool)',
            'function transferFunds() public',
        ],
        `
        pragma solidity >=0.7.0 <0.9.0;

        contract DeadManSwitch {
            address owner;
            address presetAddress;
            uint lastActiveBlock;
            
            constructor(address _presetAddress) {
                owner = msg.sender;
                presetAddress = _presetAddress;
                lastActiveBlock = block.number;
            }
            
            function still_alive() public {
                require(msg.sender == owner);
                lastActiveBlock = block.number;
            }
            
            function Alive() public view returns (bool) {
                if (block.number - lastActiveBlock <= 10) return true;
                else return false;
            }
            
            function transferFunds() public {
                require(!Alive());
                uint contractBalance = address(this).balance;
                payable(presetAddress).transfer(contractBalance); 
            }
        }
        `,
        wallet
    );

    const contract = await contractFactory.deploy(presetAddress);

    await contract.deployed();

    console.log('Contract deployed to:', contract.address);
}

deployContract();

