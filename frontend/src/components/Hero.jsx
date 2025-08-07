import React from "react";
import './Hero.css';
import heroImage from "../assets/hero.jpg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">welcome to Owna</h1>
                <p className="hero-subtitle">own a piece of the digital garden. NFTs made for you.</p>
                <button className="hero-btn">connect wallet</button>
            </div>
        </section>
    );
};

export default Hero;
