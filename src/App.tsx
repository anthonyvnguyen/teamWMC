import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Footer from "./components/Footer";
import wmcLogo from "./assets/images/wmc_logo_black.png";

function App() {
    // Array of testimonial IDs to display
    const testimonialIds = [1, 2, 3, 4, 5, 6];

    // Function to scroll to top when navigating
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

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
                            <Link
                                to="/cloud"
                                className="btn primary-btn"
                                onClick={scrollToTop}
                            >
                                Our Solutions
                            </Link>
                            <Link
                                to="/contact"
                                className="btn secondary-btn"
                                onClick={scrollToTop}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="featured-solutions-section">
                    <div className="featured-solutions-container">
                        <h2 className="section-title">
                            Empowering Secure Digital Transformation
                        </h2>
                        <div className="solutions-grid">
                            <div className="solution-tile">
                                <div className="solution-icon cloud-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                                    </svg>
                                </div>
                                <h3>Cloud Solutions</h3>
                                <p>
                                    Scalable and secure infrastructure. Optimize
                                    performance, reduce costs, and maximize
                                    flexibility with our cloud solutions.
                                </p>
                                <Link
                                    to="/cloud"
                                    className="learn-more-link"
                                    onClick={scrollToTop}
                                >
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                            <div className="solution-tile">
                                <div className="solution-icon security-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h3>Cyber Security</h3>
                                <p>
                                    Protect your systems and data. Comprehensive
                                    security services to defend against evolving
                                    threats and vulnerabilities.
                                </p>
                                <Link
                                    to="/security"
                                    className="learn-more-link"
                                    onClick={scrollToTop}
                                >
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                            <div className="solution-tile">
                                <div className="solution-icon network-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="8"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <rect
                                            x="2"
                                            y="14"
                                            width="20"
                                            height="8"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="6.01"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="18"
                                            x2="6.01"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </div>
                                <h3>Networking</h3>
                                <p>
                                    Reliable, high-performance networks. Expert
                                    design and implementation for seamless
                                    connectivity and collaboration.
                                </p>
                                <Link
                                    to="/networking"
                                    className="learn-more-link"
                                    onClick={scrollToTop}
                                >
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-us-section">
                    <div className="why-us-container">
                        <div className="why-us-text">
                            <h2>Why Choose Team WMC?</h2>
                            <p>
                                We deliver tailored solutions with exceptional
                                service and cutting-edge expertise. Our team
                                brings deep technical knowledge and a
                                client-focused approach to every project.
                            </p>
                            <ul className="benefits-list">
                                <li>
                                    <span className="check-mark">✓</span>
                                    Expert consultants with industry
                                    certifications
                                </li>
                                <li>
                                    <span className="check-mark">✓</span>
                                    Customized solutions for your specific needs
                                </li>
                                <li>
                                    <span className="check-mark">✓</span>
                                    Comprehensive support and reliable service
                                </li>
                                <li>
                                    <span className="check-mark">✓</span>
                                    Proven track record of successful
                                    deployments
                                </li>
                            </ul>
                            <Link
                                to="/about"
                                className="btn outline-btn"
                                onClick={scrollToTop}
                            >
                                About Us
                            </Link>
                        </div>
                        <div className="why-us-image">
                            <div className="logo-container">
                                <img
                                    src={wmcLogo}
                                    alt="Team WMC Logo"
                                    className="wmc-logo-large"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <h2>Meet Team WMC</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <h3>X+</h3>
                            <p>Successful Security Implementations</p>
                        </div>
                        <div className="stat-item">
                            <h3>X+</h3>
                            <p>Certified Experts</p>
                        </div>
                        <div className="stat-item">
                            <h3>X+</h3>
                            <p>Successful Cloud Implementations</p>
                        </div>
                    </div>
                </section>
                <section className="testimonials-section">
                    <TestimonialsCarousel
                        testimonialIds={testimonialIds}
                        title="A Trusted Partner in Security: Our Customer Success Stories"
                    />
                </section>

                <section className="cta-section">
                    <div className="cta-container">
                        <h2>Ready to Transform Your Digital Infrastructure?</h2>
                        <p>
                            Contact us today to discuss how our solutions can
                            help your business succeed.
                        </p>
                        <Link
                            to="/contact"
                            className="btn primary-btn"
                            onClick={scrollToTop}
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
