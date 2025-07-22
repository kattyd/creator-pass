import React, { useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constants/CreatorPass";

const CreatorPassMint = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (err) {
                console.error("user rejected connection:", err);
            } 
        } else {
            alert("please install Metamask");
        }
    };
    
    const mintPass = () => {
        if (!walletAddress) return alert("connect your wallet first");

        try {
            setLoading(true);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const creatorPass = new ethers.Contract(contractAddress, contractABI, signer);
            const tx = await creatorPass.safeMint(walletAddress);
            await tx.wait();
            alert("🎉 Creator Pass NFT minted!");
        } catch (err) {
            console.error("minting failed:", err);
            alert("⚠️ minting failed - check the console for details");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px", color: "#fff" }}>
            <h1>creator pass mint</h1>
            {walletAddress ? (
                <p>connected wallet: {walletAddress}</p>
            ) : (
                <button onClick={connectWallet}>connect wallet</button>
            )}

            <br /><br />
            <button onClick={mintPass} disabled={loading}>
                {loading ? "minting..." : "mint my creator pass"}
            </button>
        </div>
    );
};

export default CreatorPassMint;