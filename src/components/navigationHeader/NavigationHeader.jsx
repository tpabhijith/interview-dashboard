import React from "react";
import "./navigationHeader.scss";
import { NavLink } from "react-router-dom";

const NavigationHeader = () => {
    return (
        <div className="navigationWrapper">
            <nav>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="products"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="transactions"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Transactions
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="journal"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Journal
                    </NavLink>
                </li>
            </nav>
        </div>
    );
};

export default NavigationHeader;
