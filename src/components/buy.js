import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from "./Header";
import Popup from "./Popup";
import CodeInput from "./CodeInput";

class Buy extends Component {
    constructor() {
        super();
        this.state = {
            stage1: true,
            stage2: false,
            stage3: false,
            number: "",
            seen: false,
        }
    }
    togglePopup = () => {
        this.setState({
            seen: !this.state.seen
        });
    }

    toStage2 = () => {
        this.setState({
            seen: !this.state.seen,
            stage1: !this.state.stage1,
            stage2: true,
        });
    }

    toStage3 = () => {
        this.setState({
            stage2: !this.state.stage2,
            stage3: true,
        });
    }
    render() {
        return (
            <div className="container">
                <Header />
                <div className="by">
                    <div className="by-content">
                        <div className="by-account">
                            {this.state.stage1 && (
                                <div className="by-flex">
                                    <div className="by-account-state">
                                        <span className="by-account-no1">1</span>
                                        <span className=" by-account-no1_2">2</span>
                                        <span className=" by-account-no1_3">3</span>
                                    </div>
                                    <div className="by-account-details">
                                        <div className="by-account-act">
                                            <h2 className="by-account-txt">Account</h2>
                                            <p className="by-account-para">to place your order, log in by entering your 10 digit mobile number</p>
                                        </div>
                                        <div className="by-account-input">
                                            <form className="by-account-form">
                                                <div className="by-form_group">
                                                    <label htmlFor="address" className="ca-form_label by-lb">mobile Number</label>
                                                    <input type="text"
                                                    className="ca-form_input"
                                                    placeholder="+256" id="address"
                                                    required={true}/>
                                                </div>
                                                <div className="">
                                                    <button type="submit" value="submit" className="by-account-login" onClick={() => this.togglePopup()}>login</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="mt-4">
                                            <h2 className="by-account-txt">Delivery address</h2>
                                            <p className="by-account-para">
                                                select your delivery address from the existing one or add new one
                                            </p>
                                        </div>
                                        <div className="mt-10">
                                            <h2 className="by-account-txt">Payment</h2>
                                            <p className="by-account-para">
                                                select your payment method
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {this.state.seen && <Popup content={
                                <>
                                    <h1 className="ht">verify your phone number</h1>
                                    <CodeInput />
                                    <button className="by-account-nextbtn mt-4" onClick={() => this.toStage2()}>resend code</button>
                                </>
                            } handleClose={this.togglePopup}/>}

                            {this.state.stage2 && (
                                <div className="by-flex">
                                    <div className="by-account-state">
                                        <span className="by-account-no-checked">✔</span>
                                        <span className=" by-account-no1-active">2</span>
                                        <span className=" by-account-no1_3" style={{marginTop: "2rem"}}>3</span>
                                    </div>
                                    <div className="by-account-details">
                                        <div className="by-account-act">
                                            <h2 className="by-account-txt">Account</h2>
                                            <p className="by-account-para">you are securely logged in</p>
                                        </div>
                                        <div className="by-account-input mt-8">
                                            <h2 className="by-account-txt">delivery address</h2>
                                            <p className="by-account-para" style={{marginBottom: "3rem"}}>
                                                select your delivery address from the existing one or add new one
                                            </p>
                                            <div className="by-account-boxs">
                                                <div className="by-account-box">
                                                    <h1 className="by-account-boxText">shrey karah</h1>
                                                    <p className="by-account-boxPara">quanch ville 12 nkrumah rd kampala, uganda</p>
                                                    <h2 className="by-account-boxNo">+256 76 633 4574</h2>
                                                </div>
                                                <div className="by-account-box1">
                                                    <Link to="/address" className="addressLink">
                                                    <span>+</span>
                                                    add new address
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h2 className="by-account-txt">Payment</h2>
                                                <p className="by-account-para">
                                                    select your payment method
                                                </p>
                                        </div>
                                        </div>
                                        <div className="by-account-next">
                                            <button className="by-account-nextbtn"  onClick={() => this.toStage3()}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {this.state.stage3 && (
                                <div className="by-flex">
                                    <div className="by-account-state">
                                        <span className="by-account-no-checked">✔</span>
                                        <span className=" by-account-no1-checked">✔</span>
                                        <span className=" by-account-no1_3 dx">3</span>
                                    </div>
                                    <div className="by-account-details">
                                        <div className="by-account-act">
                                            <h2 className="by-account-txt">Account</h2>
                                            <p className="by-account-para">you are securely logged in</p>
                                        </div>
                                        <div className="mt-8">
                                            <div className="by-fx">
                                                <div className="">
                                                <h2 className="by-account-txt">Delivery address</h2>
                                                <p className="by-account-para">
                                                    select your delivery address from the existing one or add new one
                                                </p>
                                                <h1 className="by-account-boxText">shrey karah</h1>
                                                <p className="by-account-boxPara">quanch ville 12 nkrumah rd kampala, uganda</p>
                                                <h2 className="by-account-boxNo">+256 76 633 4574</h2>
                                                </div>
                                                <div className="mt-8">
                                                    <button className="by-btn">change address</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h2 className="by-account-txt">Payment</h2>
                                            <p className="by-account-para">
                                                select your payment method
                                            </p>
                                        </div>
                                        <form action="" className="by-form-radio__group">
                                            <input type="radio" className="by-form-radio__input" id="pay" name="size" />
                                            <label htmlFor="pay" className="by-form-radio__label">
                                                <span class="by-form-radio-button"></span>
                                                confirm payment method
                                            </label>
                                        </form>
                                        <div class="mt-4">                                
                                            <Link to="/success" className="by-confirmButton">confirm</Link>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="by-side_view">
                            <div className="bag-headerText by-text">
                                <h1>
                                bag
                                <span>0</span>
                                </h1>
                                <div className="by-hd-text">
                                    <Link to="#" className="by-hd-text2">clear bag</Link>
                                </div>
                            </div>

                            <div className="by-label mt-4">
                                <div className="by-labelText">
                                    <h1>earring and mangtakk</h1>
                                    <span>per price</span>
                                </div>
                                <div className="by-priceBox">
                                    <div className="by-price">
                                        <span className="by-price1">ugx 118,400</span>
                                        <span className="by-price2">ugx 148,400</span>
                                    </div>
                                    <div className="detail-amt" style={{width: "16%"}}>
                                        <div className="detail-button">+</div>
                                        <span>1</span>
                                        <div className="detail-button">-</div>
                                    </div>
                                </div>
                            </div>

                            <div className="by-label">
                                <div className="by-labelText">
                                    <h1>colorful Earning jhumki</h1>
                                    <span>per price</span>
                                </div>
                                <div className="by-priceBox by-priceBox-1">
                                    <div className="by-price">
                                        <span className="by-price1">ugx 118,400</span>
                                        <span className="by-price2"></span>
                                    </div>
                                    <div className="detail-amt" style={{width: "16%"}}>
                                        <div className="detail-button">+</div>
                                        <span>5</span>
                                        <div className="detail-button">-</div>
                                    </div>
                                </div>
                            </div>

                            <div className="by-total">
                                <div className="by-totalBox" style={{marginBottom: "1rem"}}>
                                    <span className="by-totalBox1">subtotal</span>
                                    <span className="by-totalBox2">ugx 12, 700</span>
                                </div>

                                <div className="by-totalBox">
                                    <span className="by-totalBox1">delivery</span>
                                    <span className="by-totalBox2 by-totalBox2-1">free</span>
                                </div>
                            </div>

                            <div className="by-total">
                                <div className="by-totalBox by-totalBox3">
                                    <span className="by-totalBox1" style={{marginTop: "1rem"}}>total</span>
                                    <span className="by-totalBox2">ugx 12, 700</span>
                                </div>

                                <div className="by-totalBox">
                                    <span className="by-totalBox1 by-totalBox1-3">xlcusive of rates</span>
                                </div>
                            </div>
                            <div className="by-footer">
                                <p className="by-footerTxt">your about to save <span className="by-footerSpan">ugx 27, 400</span> on this order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buy;
