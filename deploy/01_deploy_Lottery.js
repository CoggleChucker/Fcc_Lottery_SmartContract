const { network, ethers } = require("hardhat");
const { Verify } = require("../utils/Verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const lotteryArgs = [ethers.utils.parseEther("0.2")];
  const lotteryContract = await deploy("Lottery.sol", {
    contract: "Lottery",
    from: deployer,
    log: true,
    waitConfirmation: network.config.blockConfirmations,
    args: lotteryArgs,
  });

  await Verify(lotteryContract.address, lotteryArgs);
};

module.exports.tags = ["all"];
