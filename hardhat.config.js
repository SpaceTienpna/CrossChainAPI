require("@nomiclabs/hardhat-waffle");
let secret = require("./secret.json");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: secret.url,
      accounts: [`${secret.key}`],
    },
    rinkeby: {
      url: secret.url_rinkeby,
      accounts: [`${secret.key}`],
    },
    goerli: {
      url: secret.url_goerli,
      accounts: [`${secret.key}`],
    },
    binance: {
      url: secret.url_binance,
      accounts: [`${secret.key}`],
    },
    local: {
      url: secret.url_local,
      accounts: [`${secret.key_local}`],
    },
    fuji: {
      url: secret.url_avalanche,
      accounts: [`${secret.key}`],
    },
  },
};
