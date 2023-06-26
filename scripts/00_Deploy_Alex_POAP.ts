import { ethers } from "hardhat";

async function main() {
  const AlexPOAP = await ethers.getContractFactory("AlexPOAP");
  const alexPOAP = await AlexPOAP.deploy();

  await alexPOAP.deployed();

  console.log(
    `AlexPOAP deployed to ${alexPOAP.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});