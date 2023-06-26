import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const MAINNET_URL = process.env.MAINNET_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const TESTNET_URL = process.env.TESTNET_URL || ""

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
        eosevm: {
            url: MAINNET_URL,
            accounts:[PRIVATE_KEY],
        },
        eosevm_testnet: {
            url: TESTNET_URL,
            accounts:[PRIVATE_KEY],
        }
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY
    }
};

export default config;