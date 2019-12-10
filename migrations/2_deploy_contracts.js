var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  return deployer.deploy(Election);
};
