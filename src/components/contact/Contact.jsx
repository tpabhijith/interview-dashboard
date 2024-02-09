import React from "react";
import spotlight from "../../assets/celeb.png";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contactWrapper">
            <div className="left">
                <h3>Unlock Exclusive Benefits</h3>
                <form action="">
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <div className="phone">
                        <div>
                            <input type="number" />
                        </div>
                        <div>
                            <input type="number" />
                        </div>
                    </div>
                    <label htmlFor="name">NAME</label>
                    <div className="name">
                        <input type="text" />
                    </div>
                    <label htmlFor="email">EMAIL [OPTIONAL]</label>
                    <div className="email">
                        <input type="text" />
                    </div>
                    <button>CONTINUE</button>
                </form>
            </div>
            <div className="right">
                <div className="imageWrapper">
                    <img src={spotlight} alt="spotlight" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
