import React from 'react';
import '../App.css';
import './FirstSection.css';
import { Button } from "antd";

function FirstSection() {
    return (
        <div className="container1">
            <div className="col">
                    <p className="head">Zero Commission US<br />Investing For</p><h1 className="bold">Indian Investors</h1>
                    <p className="desc">Invest in less than one share. open an account in minutes.</p><br />
                    <Button className="btn">
                            Start Investing
                        </Button><br />
                    <p className="desc1"><b>NRIs can also use our platform.</b>visit our FAQs for more details.</p></div>
                    <div className="phone">
                        <img src="images/VESTED.png"></img>
                    </div>
                </div>
            )
}

export default FirstSection;