import React, { Component } from 'react';
import {FiLifeBuoy} from "react-icons/fi";
import {RiStore3Line} from "react-icons/ri";
import {FaStopCircle, FaCircle} from "react-icons/fa";

import Account from "./account";

class Order extends Component {
    render() {
        return (
                <Account>
                   <div className="orders-viewIn-hd">
                       <h1 className="orders-viewIn-hdText">showing all orders</h1>
                       <button>
                        <FiLifeBuoy className="orders-viewIn-hdIcon"/>
                         <span>filters</span>
                        </button>
                   </div>
                   <div className="orders-viewIn-boxs">
                   <div className="orders-viewIn-box">
                       <div className="orders-viewIn-box-iconBox">
                        <FaStopCircle className="orders-viewIn-box-iconBox-icon"/>
                        <span>target</span>
                       </div>
                       <div className="orders-viewIn-box-textBox">
                        <div className="orders-viewIn-box-textBox1" style={{fontSize: "1.2rem",}}>
                            <h1 style={{textTransform: "capitalize"}}>order #1233341</h1>
                            <h1 style={{textTransform: "uppercase"}}>ugx 12,700</h1>
                        </div>
                        <div style={{color: "gray"}} className="orders-viewIn-box-textBox1">
                            <h1>3 items</h1>
                            <h1>25/02/2021, 01:55pm</h1>
                        </div>
                        <div className="orders-viewIn-box-textBox2-1">
                        <FaCircle style={{marginRight: "5px"}}/>
                        <span>shipped</span>
                       </div>
                       </div>
                   </div>

                   <div className="orders-viewIn-box">
                       <div className="orders-viewIn-box-iconBox">
                        <div className="orders-box">
                           <RiStore3Line className="orders-viewIn-box-iconBox-icon-1"/>
                        </div>
                        <span>abhi's Juke store</span>
                       </div>
                       <div className="orders-viewIn-box-textBox">
                        <div className="orders-viewIn-box-textBox1" style={{fontSize: "1.2rem",}}>
                            <h1 style={{textTransform: "capitalize"}}>order #12333651</h1>
                            <h1 style={{textTransform: "uppercase"}}>ugx 5,400</h1>
                        </div>
                        <div className="orders-viewIn-box-textBox1"  style={{color: "gray"}}>
                            <h1>1 item</h1>
                            <h1>25/02/2021, 01:55pm</h1>
                        </div>
                        <div className="orders-viewIn-box-textBox2-2">
                        <FaCircle  style={{marginRight: "5px"}}/>
                        <span>delivered</span>
                       </div>
                       </div>
                   </div>
                   </div>
                </Account>
        );
    }
}

export default Order;
