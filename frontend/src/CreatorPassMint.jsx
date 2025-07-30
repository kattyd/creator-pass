import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contracts/CreatorPass.json";
import "./App.css"; // or wherever your styles are

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const tokenURI = await contract.tokenURI(tokenId);

const CreatorPassMint = () => {
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        if (!window.ethereum) throw new Error("MetaMask not found");

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);

        // Call tokenURI for the given tokenId
        const tokenURI = await contract.tokenURI(tokenId);

        // Convert IPFS URI to HTTP gateway URL
        const httpURL = tokenURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");

        const res = await fetch(httpURL);
        const metadata = await res.json();

        setMetadata(metadata);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to fetch metadata");
      }
    };

    fetchMetadata();
  }, []);

  if (error) return <div>❌ Error: {error}</div>;
  if (!metadata) return <div>⏳ Loading...</div>;

  return (
    <div className="nft-display">
      <h2>{metadata.name}</h2>
      <img src={metadata.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")} alt={metadata.name} style={{ width: 300 }} />
      <p>{metadata.description}</p>
    </div>
  );
};

export default CreatorPassMint;
