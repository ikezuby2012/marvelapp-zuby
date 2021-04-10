import React, { Component } from 'react';
import { RiShoppingBagLine, RiUserLine, RiStore3Line,} from "react-icons/ri";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="header">
          <div className="header-class">
            <h1 className="header-text">store made with $ko</h1>
          </div>
          <div className="header-nav">
            <div className="header-target">
              <div className="header-targetBox">
                <RiStore3Line className="header-targetIcon"/>
              </div>
              <div className="header-target-box">
                <h1 className="header-target-name">Target</h1>
                <p className="header-target-address">cham towers, plot 12 Nkruma Rd.kampala.Ug</p>
              </div>
            </div>
  
            <div className="header-icon">
              <div>
                <Link to="/bag" className="header-icon-box" style={{ marginRight: '2rem'}}>
                  <RiShoppingBagLine className="header-icon-mainIcon"/>
                  <h4>Bag</h4>
                </Link>
              </div>
              <div >
                <Link to="/account" className="header-icon-box">
                  <RiUserLine className="header-icon-mainIcon"/>
                  <h4>Account</h4>
                </Link>
              </div>
            </div>
          </div>
        </header>
        );
    }
}

export default Header;
