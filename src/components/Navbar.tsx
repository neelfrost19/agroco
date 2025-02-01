import React from "react";
import "@/styles/Navbar.css";

const Navbar = () => {


    const handleButton = (route) => {
        //navigate(`/${route}`);
    };

    return (
        <nav className="navbar">
            <div className="logo">AGROCO</div>
            {/*<div className="nav-links">*/}
            {/*    <div onClick={()=>handleButton("")}>*/}
            {/*        Home*/}
            {/*    </div>*/}
            {/*    <div onClick={()=>handleButton("product")}>*/}
            {/*        Products*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <a href="/">About Us</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <input className="search-bar" type="text" placeholder="Search"/>
        </nav>
    );
};

export default Navbar;
