import React from "react";
import "./navigationHeader.scss";
import { Link } from "react-router-dom";

const NavigationHeader = () => {
    return (
        <div className="navigationWrapper">
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="#">Products</Link>
                </li>
                <li>
                    <Link href="#">Transactions</Link>
                </li>
                <li>
                    <Link href="#">Journal</Link>
                </li>
            </nav>
        </div>
    );
};

export default NavigationHeader;
