import React, { Component } from 'react';
import { MdChevronLeft, MdVerifiedUser, MdTimer} from "react-icons/md";
import {FaTruck,FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import photo1 from "../utils/tour-1-1.jpg";
import Header from "./Header";
class about extends Component {
    render() {
        return (
            <div className="container">
              <Header />
                

        <section className="details">
            <div className="de-text">
              <MdChevronLeft className="de-icon"/>
              <Link to="/" className="de-text1">furniture</Link>
            </div>
            <div className="detail-section">
                <div className="detail-img">
                    <img src={photo1} className="detail-photo" alt="detail photo"/>
                </div>
                <div className="detail-text">
                    <h1 className="detail-texthd">
                        norbury scandinavian wood leg ottoman
                    </h1>
                    <p className="detail-text1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ut debitis dolorum ipsa quod corrupti consectetur, 
                        hic quia expedita molestiae consequatur? Modi, minus id hic itaque possimus at est maxime cumque.
                    </p>
                    <div className="detail-price">
                        <span className="detail-price1">ugx 118, 400</span>
                        <span className="detail-price2">-20%</span>
                    </div>
                    <div className="detail-disPrice">ugx 148, 900</div>
                    <div className="detail-amt">
                        <div className="detail-button">+</div>
                        <span>1</span>
                        <div className="detail-button">-</div>
                    </div>
                    <div className="detail-btns">
                        <Link className="detail-btns1">add to bag</Link>
                        <Link to="/buy" className="detail-btns2">Buy now</Link>
                    </div>
                </div>
            </div>
        </section>                 

        <section className="products">
            <h2 className="products-hdtext">
                related products
            </h2>

            <div className="products-gallery">
                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>

                <figcaption className="products-img">
                    <img src={photo1} alt="" className="products-photo"/>
                </figcaption>
            </div>
        </section>

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

export default about;
