import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import wmcLogo from "../assets/images/wmc_logo_white.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src={wmcLogo}
                        alt="Team WMC Logo"
                        className="wmc-logo"
                    />
                    <p>TEAM WMC</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Solutions</h4>
                        <ul>
                            <li>
                                <Link to="/cloud">Cloud</Link>
                            </li>
                            <li>
                                <Link to="/security">Cyber Security</Link>
                            </li>
                            <li>
                                <Link to="/networking">Networking</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <p>Email: info@teamwmc.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 TEAM WMC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
