const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy();

  const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  await lock.deployed();

  console.log(`lock address: ${lock.address}`);

  await lock.change(contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
