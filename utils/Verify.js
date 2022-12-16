const { network, run } = require("hardhat");
const { LOCALCHAINS } = require("./../helper.hardhat.config");

async function Verify(contractAddress, args) {
  if (LOCALCHAINS.includes(network.name)) {
    console.log("Development chain found. No need to verify");
    return;
  }
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });

    console.log("Contract verified successfully");
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified");
    } else {
      console.log(e);
    }
  }
}

module.exports = {
  Verify,
};
