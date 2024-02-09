import React from "react";
import Logo from "../../assets/real-estate-house.png";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
            </h1>
            <p className="company">XYZ SYSTEMS LLP.</p>
        </div>
    );
};

export default Header;
