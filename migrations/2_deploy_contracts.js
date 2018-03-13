var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Sachit','Deepanshu','Mansi','Nishkarsh','Akshay','Manday','Shreyas'], {gas: 6700000});
};