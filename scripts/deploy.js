const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const CreatorPass = await hre.ethers.getContractFactory("CreatorPass");
  const creatorPass = await CreatorPass.deploy("Creator Pass", "CPASS");
  await creatorPass.waitForDeployment();

  const contractAddress = await creatorPass.getAddress();
  console.log(`✅ contract deployed to: ${contractAddress}`);

  const metadataURI = "ipfs://YOUR_METADATA_CID";
  const tx = await creatorPass.safeMint(deployer.address, metadataURI);
  await tx.wait();

  console.log(`🎟️ NFT minted to: ${deployer.address}`);
}

main().catch((error) => {
  console.error("❌ deployment failed:", error);
  process.exitCode = 1;
});
