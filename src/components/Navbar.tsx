"use client";
import React from "react";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "@/styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="logo">AGROCO</div>
            <div className="nav-links">
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/">Products</Link>
                </div>
                <div>
                    <Link href="/">About Us</Link>
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
