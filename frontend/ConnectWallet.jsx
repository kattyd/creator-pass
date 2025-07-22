import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet({ onConnect }) {
    const [walletAddress, setWalletAddress] = useState("");

    async function connectWallet() {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setWalletAddress(accounts[0]);
                onConnect(provider, accounts[0]);
            } catch (err) {
                console.error("❌ wallet connection failed:", err);
            }
        } else {
            alert("please install Metamask!");
        }
    }

    return (
        <div>
            <button onClick={connectWallet}>
                {walletAddress ? `connected: ${walletAddress.slice(0, 6)}...` : "connect wallet"}
            </button>
        </div>
    );
}