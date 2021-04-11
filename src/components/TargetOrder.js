import React, {Component} from "react";
import { MdChevronLeft} from "react-icons/md";
import {FaStopCircle, FaCircle} from "react-icons/fa";
import { Link } from "react-router-dom";


import photo2 from "../utils/tour-1-2.jpg";
import Header from "./Header";

class TargetOrder extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                
                <div className="de-text" style={{width: '20%'}}>
                        <MdChevronLeft className="de-icon"/>
                        <Link to="/" className="de-text1" >order #1234567</Link>
                </div>
                <section className="target">
                    <div className="target-box">
                        <div className="target-box-1">
                            <FaStopCircle className="target-box-1_icon"/>
                            <div className="">
                                <span className="target-box-1_bdText">Target</span>
                                <p className="target-box-1_smText">25/02/2021, 01:55pm |3 items | UGX 1,600</p>
                            </div>
                        </div>
                        <div className="target-box-2">
                            <span className="target-box-2-rdText">✔</span>
                            <div className="">
                                <span className="target-box-1_bdText">order confirmed</span>
                                <p className="target-box-1_smText">25/02/2021, 02:15pm </p>
                            </div>
                        </div>

                        <div className="target-box-2">
                            <span className="target-box-2-rdText">✔</span>
                            <div className="">
                                <span className="target-box-1_bdText">shipped</span>
                                <p className="target-box-1_smText">04/03/2021, 09:01pm</p>
                            </div>
                        </div>

                        <div className="target-box-2 bd">
                            <span className="target-box-2-rdText grey">✔</span>
                            <div className="">
                                <span className="target-box-1_bdText">delivered</span>
                                <p className="target-box-1_smText">the delivery partner is on his way to deliver your order</p>
                            </div>
                        </div>

                        <div className="target-item">
                            <p className="target-item-p">3 items</p>
                            <div className="target-item-box">
                                <div className="target-item-imgBox">
                                    <img src={photo2} alt="item" className="target-item-img"/>
                                    <div className="target-item-imgText">
                                        <h3 className="target-item-imgText-1">norbury scandinavian wood leg ottoman</h3>
                                        <div className="">
                                            <span className="target-item-imgText-span1">size:</span> <span className="target-item-imgText-span2">medium </span>
                                            <span className="target-item-imgText-span1">colour</span> <span className="target-item-imgText-span2">⚪</span>
                                        </div>
                                        <h4 className="target-item-imgText-2">x2</h4>
                                    </div>
                                </div>
                                <h4 className="tc">ugx 8,700</h4>
                            </div>

                            <div className="target-item-box">
                                <div className="target-item-imgBox">
                                    <img src={photo2} alt="item" className="target-item-img"/>
                                    <div className="target-item-imgText">
                                        <h3 className="target-item-imgText-1">norbury scandinavian wood leg ottoman</h3>
                                        <div className="">
                                            <span className="target-item-imgText-span1">size:</span> <span className="target-item-imgText-span2">medium </span>
                                            <span className="target-item-imgText-span1">colour</span> <span className="target-item-imgText-span2">⚪</span>
                                        </div>
                                        <h4 className="target-item-imgText-2">x2</h4>
                                    </div>
                                </div>
                                <h4 className="tc">ugx 8,700</h4>
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
                                <p className="by-footerTxt tc-md">your about to save <span className="by-footerSpan">ugx 27, 400</span> on this order</p>
                            </div>

                            <div className="tc-fx">
                                <h4 className="tc-hdText">your delivery details</h4>
                                <div className="tc-mb">
                                    <h4 style={{fontSize: "1.3rem", textTransform: "capitalize"}}>shreh karah</h4>
                                    <h4 style={{fontSize: "1.2rem", textTransform: "capitalize"}}>cash on delivery</h4>
                                </div>
                                
                                <div className="">
                                    <h4 className="tc-text1">+256 76 633 4574</h4>
                                    <h4 className="tc-text2">quench ville, plot 12 nkrumah road</h4>
                                    <h4 className="tc-text3">kampala, uganda</h4>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TargetOrder;