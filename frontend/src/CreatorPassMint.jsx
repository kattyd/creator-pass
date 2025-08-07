import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contracts/CreatorPass.json";
import "./App.css";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const tokenId = 1;

const CreatorPassMint = () => {
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const connectWalletAndFetch = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask not found");

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);

      setLoading(true);
      const tokenURI = await contract.tokenURI(tokenId);

      const httpURL = tokenURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
      const res = await fetch(httpURL);
      const metadata = await res.json();

      setMetadata(metadata);
      setConnected(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to connect and fetch metadata");
      setLoading(false);
    }
  };

  return (
    <div className="nft-display">
      {!connected && (
        <button onClick={connectWalletAndFetch}>🔗 Connect Wallet</button>
      )}

      {error && <div>❌ Error: {error}</div>}
      {loading && <div>⏳ Loading...</div>}

      {metadata && (
        <>
          <h2>{metadata.name}</h2>
          <img
            src={metadata.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")}
            alt={metadata.name}
            style={{ width: 300 }}
          />
          <p>{metadata.description}</p>
        </>
      )}
    </div>
  );
};

export default CreatorPassMint;
