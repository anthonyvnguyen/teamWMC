import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="main-content">
                <section className="hero-section">
                    <div className="hero-container">
                        <h1 className="hero-title">
                            Transforming{" "}
                            <span className="blue-highlight">Digital</span>{" "}
                            Landscapes with{" "}
                            <span className="blue-highlight">Innovative</span>{" "}
                            Solutions
                        </h1>
                        <p className="hero-description">
                            Team WMC is an all-in-one digital solutions provider
                            for your business, offering cloud, cyber security,
                            and networking solutions.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/cloud" className="btn primary-btn">
                                Our Solutions
                            </Link>
                            <Link to="/contact" className="btn secondary-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="services-container">
                        <h2 className="section-title">Our Services</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <h3>Cloud Solutions</h3>
                                <p>
                                    We provide comprehensive cloud services to
                                    help businesses migrate, manage, and
                                    optimize their cloud infrastructure.
                                </p>
                                <Link to="/cloud" className="btn outline-btn">
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-card">
                                <h3>Cyber Security</h3>
                                <p>
                                    Our cyber security solutions protect your
                                    data and systems from threats with advanced
                                    security measures and continuous monitoring.
                                </p>
                                <Link
                                    to="/security"
                                    className="btn outline-btn"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-card">
                                <h3>Networking</h3>
                                <p>
                                    We offer end-to-end networking solutions
                                    from design and implementation to management
                                    and optimization.
                                </p>
                                <Link
                                    to="/networking"
                                    className="btn outline-btn"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <div className="about-container">
                        <h2 className="section-title">About Us</h2>
                        <p className="about-description">
                            Team WMC is a leading IT solutions provider
                            dedicated to helping businesses navigate the digital
                            landscape. With our expertise in cloud solutions,
                            cyber security, and networking, we empower
                            organizations to achieve their digital
                            transformation goals while ensuring secure and
                            efficient operations.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img
                            src={require("./assets/images/wmc_logo.png")}
                            alt="Team WMC Logo"
                        />
                        <p>Team WMC</p>
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
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Email: info@teamwmc.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 Team WMC. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
