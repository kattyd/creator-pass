import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            <section className="footer">
                    <div className="newsletter">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <text>Subscribe wa wa wa wa</text>
                        <div className="email">
                            <input type="email" placeholder="your email heere" />
                            <button>join</button>
                            <p>by subscribing you consent to privacy policy</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="quick">
                            <ul>
                                <li>Quick links</li>
                                <li>Explore NFTs</li>
                                <li>Our Story</li>
                                <li>Community Hub</li>
                                <li>Support Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="connect">
                            <ul>
                                <li>Connect With Us</li>
                                <li>Join Discord</li>
                                <li>Follow Blog</li>
                                <li>Art Showcase</li>
                                <li>Events Page</li>
                                <li>NFT Gallery</li>
                            </ul>
                        </div>
                        <div className="stay">
                            <ul>
                                <li>Stay Connected</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>X</li>
                                <li>LinkedIn</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                </div>
            </section>
        </>
    );
};

export default Footer;