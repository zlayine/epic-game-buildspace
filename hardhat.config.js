require("@nomiclabs/hardhat-waffle");

const private = require("./privatekey.js");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${private.alchemy}`,
      accounts: [private.key],
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true,
    },
  },
};
