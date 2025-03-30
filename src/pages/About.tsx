import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import wmcLogo from "../assets/images/wmc_logo_black.png";
import naviImage from "../assets/images/navi.jpeg";
import americanFlag from "../assets/images/american_flag.jpeg";
import ctgTechImage from "../assets/images/ctg_tech.jpg";
import gditImage from "../assets/images/gdit.jpg";
import contactBgImage from "../assets/images/contact_bg.jpg";

const About = () => {
    // Function to scroll to top when navigating
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="about-hero">
                    <div className="about-hero-container">
                        <div className="about-hero-text">
                            <h1>About Team WMC</h1>
                            <p>Your Partner in Digital Transformations</p>
                        </div>
                        <img
                            src={wmcLogo}
                            alt="Team WMC Logo"
                            className="about-hero-logo"
                        />
                    </div>
                </section>

                <section className="who-we-are">
                    <img
                        src={americanFlag}
                        alt="American Flag"
                        className="american-flag-bg"
                    />
                    <div className="who-we-are-container">
                        <div className="who-we-are-content">
                            <h2>Who We Are</h2>
                            <p>
                                At Team WMC, we are committed to delivering
                                cutting-edge technology solutions that empower
                                businesses, secure digital landscapes, and drive
                                transformation. As a Small Disadvantaged
                                Business (SDB) with deep expertise in
                                cybersecurity, cloud solutions, and networking,
                                we help organizations navigate the evolving
                                digital world with confidence.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="our-mission">
                    <div className="our-mission-container">
                        <div className="our-mission-content">
                            <h2>Our Mission</h2>
                            <p>
                                We believe in harnessing technology to safeguard
                                businesses, enhance operational efficiency, and
                                enable sustainable growth. Our mission is to
                                provide tailored, high-impact solutions that
                                address the unique challenges of our clients.
                            </p>
                        </div>
                        <div className="mission-values">
                            <div className="mission-value">
                                <h3>Protect</h3>
                            </div>
                            <div className="mission-value">
                                <h3>Innovate</h3>
                            </div>
                            <div className="mission-value">
                                <h3>Transform</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="meet-ceo">
                    <div className="meet-ceo-container">
                        <div className="meet-ceo-content">
                            <h2>Meet Our CEO</h2>
                            <p>
                                Navi Chhabra leads Team WMC with a vision for
                                innovation, security, and excellence. A graduate
                                of George Washington University (Class of 1996),
                                Navi brings decades of experience in networking
                                and cybersecurity. As a VoIP Team Lead, he
                                specializes in advanced communication
                                technologies and secure network infrastructure.
                                He combines his deep technical expertise with
                                leadership to drive Team WMC's mission of
                                securing digital infrastructure.
                            </p>
                        </div>
                        <div className="ceo-profile">
                            <img
                                src={naviImage}
                                alt="Navi Chhabra"
                                className="ceo-image"
                            />
                            <h3 className="ceo-name">Navi Chhabra</h3>
                            <p className="ceo-title">Chief Executive Officer</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-container">
                        <h2>Our Commitment to Your Success</h2>
                        <p>
                            At Team WMC, we are more than just a technology
                            provider—we are your trusted partner in digital
                            transformation. We are dedicated to helping
                            businesses thrive in an era of rapid technological
                            change, ensuring they remain secure, efficient, and
                            competitive.
                        </p>
                        <Link
                            to="/contact"
                            className="btn primary-btn"
                            onClick={scrollToTop}
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
