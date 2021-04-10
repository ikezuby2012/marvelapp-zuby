import React, { Component } from 'react';
import { MdAssignment, MdPinDrop} from "react-icons/md";
import { Link } from "react-router-dom";

import Header from "./Header"
class Account extends Component {
    render() {
        return (
            <div className="container">
              <Header />
        <section className="orders">
            <div className="order-hd">
                <h1>+91-8080021387</h1>
                <Link to="/" className="order-link">
                    log out
                </Link>
            </div>
            <div className="orders-content">
            <nav className="orders-sideBar">
                <ul className="orders-sideNav">
                    <li className="orders-sideNav-item orders-sideNav-item--active">
                        <Link className="orders-sideNav-link" to="/account">
                            <MdAssignment className="orders-sideNav-icon"/>
                            <span>order</span>
                        </Link>
                    </li>

                    <li className="orders-sideNav-item">
                        <Link className="orders-sideNav-link" to="/address">
                            <MdPinDrop className="orders-sideNav-icon"/>
                            <span>my addresses</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="orders-view">
              <div className="orders-viewIn">
                {this.props.children}
              </div>
            </main>
            </div>
        </section>
            </div>
        );
    }
}

export default Account;
