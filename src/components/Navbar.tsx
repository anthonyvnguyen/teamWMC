import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import wmcLogo from "../assets/images/wmc_logo.png";
import sbaLogo from "../assets/images/sba_logo.png";

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logos">
                    <img
                        src={wmcLogo}
                        alt="Team WMC Logo"
                        className="wmc-logo"
                    />
                    <h1 className="navbar-title">Team WMC</h1>
                    <img src={sbaLogo} alt="SBA Logo" className="sba-logo" />
                </div>
                <div className="navbar-items">
                    <ul className="navbar-links">
                        <li className="dropdown">
                            <button
                                className="dropdown-toggle"
                                onClick={toggleDropdown}
                            >
                                Tech & Solutions{" "}
                                <span className="dropdown-arrow">▼</span>
                            </button>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            to="/cloud"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/security"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            Cyber Security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/networking"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            Networking
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/insights">Insights</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                    <Link to="/contact">
                        <button className="contact-btn">Contact Us</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
