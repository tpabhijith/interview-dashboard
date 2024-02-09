import React from "react";
import spotlight from "../../assets/membership.jpg";

import "./spotlight.scss";
import ImageSlider from "../imageSlider/ImageSlider";

const Spotlight = () => {
    return (
        <div className="spotlightWrapper">
            <div className="left">
                <h3>New Arrival</h3>
                <p>JOIN TODAY</p>
                <div>
                    <img src={spotlight} alt="spotlight" />
                    <button>JOIN NOW</button>
                </div>
            </div>
            <div className="right">
                <h3>Unlock Premium Features Now</h3>
                <ImageSlider />
                <button className="unlock">UNLOCK NOW</button>
                <button className="unlock">DETAILS</button>
            </div>
        </div>
    );
};

export default Spotlight;
