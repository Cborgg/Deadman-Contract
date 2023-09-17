/*import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY="LH2MON4fXOIv5X88wOBOn1X2mlVDUfpl";
const SEPOLIA_PRIVATE_KEY="eac5cfdc677e2b00dcdffcf1d6ce3d11d149ab44792f3ef5f04cf1e7b01b4c19"
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  etherscan: {
    apiKey:"NJVQ534SZ683CAA1AU3GVGRY4CU9QWZVHX",
    },
  networks: {
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;*/
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "LH2MON4fXOIv5X88wOBOn1X2mlVDUfpl";
const SEPOLIA_PRIVATE_KEY = "eac5cfdc677e2b00dcdffcf1d6ce3d11d149ab44792f3ef5f04cf1e7b01b4c19";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "NJVQ534SZ683CAA1AU3GVGRY4CU9QWZVHX",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY], // Wrap SEPOLIA_PRIVATE_KEY in an array
    },
  },
};

export default config;
