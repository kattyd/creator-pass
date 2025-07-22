const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // <-- Replace this
    const metadataURI = "ipfs://bafkreidivwb6a5bsn7lh3w3cadjwcbyy3oirpgoj7ugjwvihdapst7edqy"; // <-- Replace this too

    const CreatorPass = await hre.ethers.getContractAt("CreatorPass", contractAddress);

    const tx = await CreatorPass.safeMint(deployer.address, metadataURI);
    await tx.wait();

    console.log(`🎟️ NFT minted to: ${deployer.address}`);
}

main().catch((error) => {
    console.error("❌ Minting failed:", error);
    process.exitCode = 1;
});
