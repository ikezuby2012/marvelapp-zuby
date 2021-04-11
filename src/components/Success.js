import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Success extends Component {
    render () { 
        return(
            <div className="container">
                <Header />

                <div className="bg-bag">
                    <div className="bag">
                        <div className="bag-headerText"></div>
                        <div className="bag-icon">
                            <span className="sc-emoji">🎉</span>
                            <span className="sc-text1">thank you</span>
                            <span className="sc-text1">your order has been placed successfully</span>
                        </div>
                        <p className="bag-text sc-fx">
                            <span style={{marginBottom: "1.5rem"}}>you will receive a confirmation message as soon as the order is accepted</span>  
                            <span>order number: John- 271e</span>
                        </p>
                    </div>
                    <div className="detail-btns sc-btn">
                    <div className="detail-btns sc-btn">
                        <Link className="sc-btn1" to="/target">track order</Link>
                        <Link className="sc-btn2" to="/" >continue Shopping</Link>
                    </div>
                </div>
            </div>
            </div>
        )      
    }
}
export default Success;