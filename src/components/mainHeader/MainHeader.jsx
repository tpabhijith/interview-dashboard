import React from "react";
import "./mainHeader.css";
import Header from "../header/Header";
import NavigationHeader from "../navigationHeader/NavigationHeader";

const MainHeader = () => {
    return (
        <div className="mainWrapper">
            <Header />
            <NavigationHeader />
        </div>
    );
};

export default MainHeader;
