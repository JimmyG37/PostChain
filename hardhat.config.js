require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL

const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
const REPORT_GAS = process.env.REPORT_GAS || false

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
            chainId: 4,
            blockConfirmations: 6,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
            chainId: 5,
            blockConfirmations: 6,
        },
        mainnet: {
            url: MAINNET_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 1,
            blockConfirmations: 6,
        },
        polygon: {
            url: POLYGON_MAINNET_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 137,
            blockConfirmations: 6,
        },
        mumbai: {
            url: MUMBAI_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
            chainId: 80001,
            blockConfirmations: 6,
        },
    },
    etherscan: {
        apiKey: {
            rinkeby: ETHERSCAN_API_KEY,
            kovan: ETHERSCAN_API_KEY,
            polygon: POLYGONSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: REPORT_GAS,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    contractSizer: {
        runOnCompile: false,
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
        player: {
            default: 1,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.4.24",
            },
        ],
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
}
