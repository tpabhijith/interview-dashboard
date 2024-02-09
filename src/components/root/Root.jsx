import React from "react";
import MainHeader from "../mainHeader/MainHeader";
import Spotlight from "../spotlight/Spotlight";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default Root;
