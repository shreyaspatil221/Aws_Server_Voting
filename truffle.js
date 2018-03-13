// Allows us to use ES6 in our migrations and tests.
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "WqDFeWbMMM5qFzon2C7O";
var mnemonic = "lemon waste spend three remove render name fiber yard issue minute embark";

/*
require('babel-register')
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 470000
    }
  }
}
*/

module.exports = {
  networks: {
    "live": {
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/"+infura_apikey),
      host: "127.0.0.1",
      port: 8456,
      network_id: '1',
      gas: 470000
    }
    },

    MyNodeName: {
      provider: new HDWalletProvider(mnemonic, "http://192.168.43.134:8545"),
      gas: 450000,
      network_id: 123
    },

    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      gas: 450000,
      network_id: 3
    }
  };