import React, { Component } from 'react';
import {RiEmotionSadLine} from "react-icons/ri";
import { MdChevronRight, MdVerifiedUser,MdTimer, } from "react-icons/md";
import {FaTruck,FaWhatsapp, FaSearch } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import photo1 from "../utils/tour-1-1.jpg";
import photo2 from "../utils/tour-1-2.jpg";
import photo3 from "../utils/tour-1-3.jpg";
import photo4 from "../utils/tour-1-cover.jpg";

import Header from "./Header"

class main extends Component {
    render() {
        return (
            <div className="container">
              <Header />
  
        <div className="content">
          <div className="sidebar">
            <nav>
              <ul className="side-nav">
                  <li className="side-nav-items side-nav-items--active">
                    <NavLink to="#" style={{color: '#2766cc'}}className="side-nav-link" >
                        <span>electronics</span>
                        (12)
                    </NavLink>
                  </li>

                  <li className="side-nav-items">
                    <NavLink to="#" className="side-nav-link" >
                        <span>face masks</span>
                        (3)
                    </NavLink>
                  </li>

                  <li className="side-nav-items">
                    <NavLink to="#" className="side-nav-link">
                        <span>fresh food</span>
                        (8)
                    </NavLink>
                  </li>

                  <li className="side-nav-items">
                    <NavLink to="#" className="side-nav-link">
                        <span>grocery</span>
                        (6)
                    </NavLink>
                  </li>

                  <li className="side-nav-items">
                    <NavLink to="#" className="side-nav-link">
                        <span>home</span>
                        (24)
                    </NavLink>
                  </li>

                  <li className="side-nav-items">
                    <NavLink to="#" className="side-nav-link">
                        <span>kids</span>
                        (9)
                    </NavLink>
                  </li>

                  <li className="side-navLi">
                    <Link to="#" className=" side-navView">
                        <span>view all categories</span>  
                        <MdChevronRight className="side-nav-logo"/>
                    </Link>
                  </li>
              </ul>
            </nav>
          </div>

          <main className="mainView">
            <div className="main">
              <form action="#" className="main-search">
                <input type="search" placeholder="search..." className="main-searchBox"/>
                <div className="main-searchIcon">
                  <FaSearch className="main-searchIcon-Box"/>
                </div>
              </form>
              <div className="main-headerText">
                <h1>
                  Electronics
                  <span>12</span>
                </h1>
              </div>

              <div className="main-details">
                <ul>
                  <li className="main-list">
                    <figcaption className="main-detailsTag">
                      <img src={photo1} alt="details" className="main-photo"/>
                      <div className="main-box">
                        <p className="main-box-text">kids 2pk cloth face masks</p>
                        <p className="main-box-price">ugx 185,000</p>
                      </div>
                      <div className="main-btn">
                        <Link to="/about" className="main-button">+ add</Link>
                      </div>
                    </figcaption>
                  </li>

                  <li className="main-list">
                    <figcaption className="main-detailsTag">
                      <img src={photo2} alt="details" className="main-photo"/>
                      <div className="main-box">
                        <p className="main-box-text">norbury scandinavian wood leg ottoman</p>
                        <p className="main-box-price">ugx 184,000</p>
                        <p className="main-box-price-1">ugx 184,000</p>
                      </div>
                      <div className="main-btn">
                        <Link to="/" className="main-button">+ add</Link>
                      </div>
                    </figcaption>
                  </li>

                  <li className="main-list">
                    <figcaption className="main-detailsTag">
                      <img src={photo3} alt="details" className="main-photo"/>
                      <div className="main-box">
                        <p className="main-box-text">baby cuts carrots -1ib-good and gather</p>
                        <p className="main-box-price">ugx 4,000</p>
                      </div>
                      <div className="main-btn">
                        <Link to="/" className="main-button">+ add</Link>
                      </div>
                    </figcaption>
                  </li>

                  <li className="main-list">
                    <figcaption className="main-detailsTag">
                      <img src={photo4} alt="details" className="main-photo"/>
                      <div className="main-box">
                        <p className="main-box-text">metal county chalet charm and wood branch -sarachina home</p>
                        <p className="main-box-price">ugx 34,000</p>
                      </div>
                      <div className="main-btn">
                        <Link to="/" className="main-button">+ add</Link>
                      </div>
                    </figcaption>
                  </li>

                  <li className="main-list">
                    <figcaption className="main-detailsTag">
                      <img src={photo1} alt="details" className="main-photo"/>
                      <div className="main-box">
                        <p className="main-box-text">alternative protein ground- 160z-good & gather</p>
                        <p className="main-box-price">ugx 185,000</p>
                      </div>
                      <div className="main-btn">
                        <Link to="/" className="main-button">+ add</Link>
                      </div>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
          </main>
          <div className="bags">
            <div className="bag">
              <div className="bag-headerText">
                    <h1>
                      bag
                      <span>0</span>
                    </h1>
                </div>
                <div className="bag-icon">
                  <RiEmotionSadLine className="bag-emoji"/>
                  <span>it's empty here</span>
                </div>
                <p className="bag-text">
                  start shopping to add items to your bag
                </p>
            </div>
          </div>
        </div>
  
        <footer>
          <div className="footerClass">
            <div className="footer-logo">
              <FaTruck className="footer-icon"/>
              <span className="footer-text">fast delivery</span>
            </div>

            <div className="footer-logo">
              <MdVerifiedUser className="footer-icon"/>
              <span className="footer-text">buyer protection</span>
            </div>

            <div className="footer-logo">
              <MdTimer className="footer-icon"/>
              <span className="footer-text">customer support</span>
            </div>
          </div>
          <div className="footer-target">
            <h4 className="footer-target-hdText">
              store details
            </h4>
            <h2 className="footer-target-hdText2">Target</h2>
            <p className="footer-target-address">
              cham towers, plot 12 Nkruma Rd.kampala.Ug
            </p>
            <button className="footer-target-btn">
              <FaWhatsapp className="footer-target-icon"/>
              <span>chat with us</span>
            </button>
          </div>
        </footer>
      </div>
      );
    }
}

export default main;
