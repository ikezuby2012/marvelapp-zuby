import React, { Component } from 'react';
import {RiEmotionSadLine} from "react-icons/ri";
import { Link } from "react-router-dom";


import Header from "./Header";

class bag extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="bg-bag">
                    <div className="bag">
                        <div className="bag-headerText"></div>
                        <div className="bag-icon">
                            <RiEmotionSadLine className="bag-emoji"/>
                            <span>it's empty here</span>
                        </div>
                        <p className="bag-text">
                            start shopping to add items to your bag
                        </p>
                    </div>
                    <div className="bg-btn">
                        <Link to="/" >Back to homepage</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default bag;
