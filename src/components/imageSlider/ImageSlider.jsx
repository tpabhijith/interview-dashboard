import React from "react";
import "./imageSlider.scss";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "unset",
                position: "absolute",
                top: "40%",
                right: "0px",
                width: "20px",
            }}
            onClick={onClick}
        >
            <img src={rightArrow} alt="next" style={{ width: "20px" }} />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "unset",
                position: "absolute",
                top: "40%",
                width: "20px",
            }}
            onClick={onClick}
        >
            <img src={leftArrow} alt="prev" style={{ width: "20px" }} />
        </div>
    );
}

const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            <div className="imageContainer">
                <img src={image1} alt="slider1" />
                <div className="description">
                    <p>Lower Interest Rates</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={image2} alt="slider1" />
                <div className="description">
                    <p>Interest Free Payments</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={image3} alt="slider1" />
                <div className="description">
                    <p>Discount on Materials</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={image1} alt="slider1" />
                <div className="description">
                    <p>Lower Interest Rates</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={image2} alt="slider1" />
                <div className="description">
                    <p>Interest Free Payments</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={image3} alt="slider1" />
                <div className="description">
                    <p>Discount on Materials</p>
                </div>
            </div>
        </Slider>
    );
};

export default ImageSlider;
