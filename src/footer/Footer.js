import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";


function Footer() {
    return (
        <div>
            <footer className="footer-area">
                <div className="container">
                    <div classname="footer-inner">
                        <div className="row">
                            <div classname="col-lg-3 col-md-6">
                                <div classname="widget">
                                    <Link classname="widget-title" to={"/"}>
                                        <img classname="footer__logo" src={logo} alt="logo"/>
                                        Bank of States
                                    </Link>
                                    <ul classname="widget-list">
                                        <li>112, West road, F1 456 Tram Town.</li>
                                        <li>Office No 2312</li>
                                        <li>info@bankofstates.com</li>
                                        <li>234-3434567</li>
                                    </ul>
                                </div>
                            </div>
                            <div classname="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                                <div classname="widget widget-links">
                                    <div classname="widget-title">Links</div>
                                    <ul classname="widget-list">
                                        <li>
                                            <Link to={"/services"}>FAQs</Link>
                                        </li>
                                        <li>
                                            <Link to={"/about"}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                    </ul>                                    
                                </div>
                            </div>
                            <div classname="col-xl-2 col-lg-3 col-md-6">
                                <div classname="widget widget-about">
                                    <h4 classname="widget-title">About Us.</h4>
                                    <ul classname="widget-list">
                                        <li>
                                            <Link to={"/about"}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/blog"}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>Sign in</Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>My Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div classname="col-lg-4 col-md-6">
                                <div classname="widget widget-contact">
                                    <h4 classname="widget-title">Contact Us.</h4>
                                    <p>Please connect with us through following</p>
                                    <ul classname="social-area">
                                        <li>
                                            <Link to={"/"}>
                                                <TwitterIcon />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                <FacebookIcon />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                <LinkedInIcon />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                <PinterestIcon />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div classname="footer-bottom">
                <div classname="container">
                    <div classname="row">
                        <div classname="col-lg-6 align-self-center">
                            <div classname="text-lg-left text-center">
                                <ul>
                                    <li>
                                        <Link to={"/"}>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to={"7"}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
