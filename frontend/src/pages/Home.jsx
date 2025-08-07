import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
        </div>
    );
};

export default Home;