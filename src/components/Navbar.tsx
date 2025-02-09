"use client";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "@/styles/Navbar.css";

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="logo">AGROCO</div>
            <div className="nav-links">
                <div>
                    <a href="/">Home</a>
                </div>
                <div>
                    <a href="/">Products</a>
                </div>
                <div>
                    <a href="/">About Us</a>
                </div>
            </div>
            <div className="animation">
                {/*<DotLottieReact*/}
                {/*    src="/anim/leaves.lottie"*/}
                {/*    loop*/}
                {/*    autoplay*/}
                {/*/>*/}
            </div>
        </nav>
    );
};

export default Navbar;
