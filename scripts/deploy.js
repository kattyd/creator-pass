const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const CreatorPassFactory = await hre.ethers.getContractFactory("CreatorPass");
    const creatorPass = await CreatorPassFactory.deploy("Creator Pass", "CPASS");

    await creatorPass.waitForDeployment();

    const contractAddress = await creatorPass.getAddress();
    console.log(`✅ contract deployed to: ${contractAddress}`);

    const metadataURI = "ipfs://bafkreidivwb6a5bsn7lh3w3cadjwcbyy3oirpgoj7ugjwvihdapst7edqy";

    const mintTx = await creatorPass.safeMint(deployer.address, metadataURI);
    await mintTx.wait();

    console.log(`🎟️ NFT minted to: ${deployer.address}`);
}

main().catch((error) => {
    console.error("❌ deployment failed:", error);
    process.exitCode = 1;
});
