import React, { useState } from "react";
import './Features.css';
import nft1 from "../assets/nft-1.jpg";
import nft2 from "../assets/nft-2.jpg";
import nft3 from "../assets/nft-3.jpg";

const faqs = [
    {
        question: "what is Owna?",
        answer: "Owna is a cozy NFT platform for creators who want to share digital moments with a personal touch."
    },
    {
        question: "how do I mint?",
        answer: "you just connect your wallet, upload your content, and click Mint."
    },
    {
        question: "is there a fee?",
        answer: "only a small gas fee for minting. we aim to keep costs low for creators."
    }
];

const Features = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="features-section">
            <h2 className="features-heading">What You Get with Owna</h2>
            <div className="features-container">
                <div className="feature-card">
                <img src={nft1} alt="Mint NFT" className="feature-image" />
                <h3 className="feature-title">Mint Collectibles</h3>
                <p className="feature-description">Create, own, and showcase your digital treasures with ease.</p>
                </div>

                <div className="feature-card">
                <img src={nft2} alt="Aesthetic NFTs" className="feature-image" />
                <h3 className="feature-title">Wholesome Aesthetics</h3>
                <p className="feature-description">A soft, cozy design that makes your NFT journey feel like home.</p>
                </div>

                <div className="feature-card">
                <img src={nft3} alt="Community" className="feature-image" />
                <h3 className="feature-title">Creative Community</h3>
                <p className="feature-description">Join a space for gentle creators, artists, and collectors.</p>
                </div>
            </div>
            </section>
            <section className="roadmap-section">
                <h2 className="timeline-heading">Roadmap</h2>
                <div className="timeline">
                    <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Phase 1: Foundation</h3>
                        <p>Launch creator passes and start early creator onboarding.</p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Phase 2: Community</h3>
                        <p>Build and engage creator community. Launch first NFT drops.</p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Phase 3: Expansion</h3>
                        <p>Expand platform tools and onboarding for buyers and collectors.</p>
                    </div>
                    </div>
                </div>
                </section>
            <section className="faq-section">
                <h2 className="faq-heading">FAQs</h2>
                
                <div className="faq-item">
                    <details>
                    <summary>What is Owna?</summary>
                    <p>Owna is a creator-first NFT platform helping artists and makers earn directly from their audiences.</p>
                    </details>
                </div>

                <div className="faq-item">
                    <details>
                    <summary>How do I join as a creator?</summary>
                    <p>You can mint a Creator Pass to get early access and exclusive tools to start selling your work.</p>
                    </details>
                </div>

                <div className="faq-item">
                    <details>
                    <summary>Do I need crypto experience?</summary>
                    <p>No, Owna is built to be accessible even if you've never used crypto before.</p>
                    </details>
                </div>
                </section>
        </>
    );
};

export default Features;