import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import wmcLogo from "../assets/images/wmc_logo_black.png";
import sbaLogo from "../assets/images/sba_logo.png";

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1105);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 1105;
            setIsMobile(mobile);

            if (!mobile) {
                setMobileMenuOpen(false);
                setDropdownOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = () => {
        if (isMobile) {
            setDropdownOpen(!dropdownOpen);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const closeMobileMenuAndScrollToTop = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        scrollToTop();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="no-underline" onClick={scrollToTop}>
                    <div className="navbar-logos">
                        <img
                            src={wmcLogo}
                            alt="Team WMC Logo"
                            className="wmc-logo"
                        />
                        <h1 className="navbar-title">TEAM WMC</h1>
                        <img
                            src={sbaLogo}
                            alt="SBA Logo"
                            className="sba-logo"
                        />
                    </div>
                </Link>

                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`hamburger ${
                            mobileMenuOpen ? "active" : ""
                        }`}
                    ></span>
                </button>

                <div
                    className={`navbar-items ${
                        mobileMenuOpen ? "mobile-open" : ""
                    }`}
                >
                    <ul className="navbar-links">
                        <li className="dropdown">
                            <button
                                className="dropdown-toggle"
                                onClick={toggleDropdown}
                            >
                                Tech & Solutions{" "}
                                <span
                                    className={`dropdown-arrow ${
                                        dropdownOpen ? "open" : ""
                                    }`}
                                >
                                    ▼
                                </span>
                            </button>
                            <ul
                                className={`dropdown-menu ${
                                    isMobile && dropdownOpen ? "show" : ""
                                }`}
                            >
                                <li>
                                    <Link
                                        to="/cloud"
                                        onClick={closeMobileMenuAndScrollToTop}
                                    >
                                        Cloud Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/security"
                                        onClick={closeMobileMenuAndScrollToTop}
                                    >
                                        Cyber Security
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/networking"
                                        onClick={closeMobileMenuAndScrollToTop}
                                    >
                                        Networking
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to="/insights"
                                onClick={closeMobileMenuAndScrollToTop}
                            >
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={closeMobileMenuAndScrollToTop}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <Link to="/contact" onClick={closeMobileMenuAndScrollToTop}>
                        <button className="contact-btn">Contact Us</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
