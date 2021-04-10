import React, { Component } from 'react';
import {Link} from "react-router-dom"

import Popup from "./Popup";
import Account from "./account";
import CreateAddress from "./CreateAddress"

class Address extends Component {
    constructor (){
        super();
        this.state = {
            editAddress: false,
            createAddress: false
        }
    }
    togglePopup= () => {
        this.setState({
            createAddress: !this.state.createAddress,
            editAddress: !this.state.editAddress,
        })
    }

    render() {
        return (
            <Account>
                <div className="orders-viewIn-boxs">
                    <div className="orders-viewIn-box">
                        <div className="addressBox">
                            <h1 className="addressText">shrey karah</h1>
                            <p className="addressPara">quanch ville 12 nkrumah rd kampala, uganda</p>
                            <h2 className="addressNo">+256 76 633 4574</h2>
                            <div className="addressBtns">
                                <button className="addressBtns-1" onClick={() => this.togglePopup()}>edit</button>
                                <button className="addressBtns-2">delete</button>
                            </div>
                        </div>
                    </div>

                    <div className="orders-viewIn-box">
                        <Link to="#" className="addressLink" onClick={() => this.togglePopup()}>
                         <span>+</span>
                         add new address
                        </Link>
                    </div>

                    {this.state.createAddress && <Popup content = {
                            <>
                                <h1 className="ht">Create Address</h1>
                                <CreateAddress />
                            </>}
                            handleClose={this.togglePopup}
                    />}

                    {this.state.editAddress && <Popup content = {
                        <>
                            <h1 className="ht">edit Address</h1>
                            <CreateAddress />
                        </>}
                        handleClose={this.togglePopup}
                    />}
                    
                        
                        
                </div>
            </Account>
        );
    }
}

export default Address;
