import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import "../styles/Solutions.css";
import "../styles/CyberSecurity.css";

const CyberSecurity = () => {
    // Define testimonial IDs related to security for the carousel
    const testimonialIds = [2, 3, 5];

    // Function to scroll to top when navigating
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="cyber-hero">
                    <div className="cyber-hero-container">
                        <div className="cyber-hero-content">
                            <h1>
                                Comprehensive{" "}
                                <span className="purple-highlight">
                                    Cyber Security
                                </span>{" "}
                                Solutions
                            </h1>
                            <p>
                                Protecting your digital assets against evolving
                                cyber threats with enterprise-grade security
                            </p>
                            <div className="hero-buttons">
                                <Link
                                    to="/contact"
                                    className="btn primary-btn"
                                    onClick={scrollToTop}
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/about"
                                    className="btn secondary-btn"
                                    onClick={scrollToTop}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="cyber-hero-image">
                            <svg
                                width="150"
                                height="150"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                <section className="cyber-services">
                    <div className="cyber-services-container">
                        <div className="cyber-services-header">
                            <h2>Our Security Offerings</h2>
                            <p>
                                Team WMC provides comprehensive cyber security
                                solutions to protect your organization's
                                critical data and systems from constantly
                                evolving cyber threats. Our team of security
                                experts implements industry-leading security
                                measures and best practices.
                            </p>
                        </div>

                        <div className="cyber-services-grid">
                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
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
                                <div className="service-content">
                                    <h3>Security Assessment</h3>
                                    <p>
                                        Comprehensive security assessment to
                                        identify vulnerabilities in your systems
                                        and networks before they can be
                                        exploited.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="11"
                                            width="18"
                                            height="11"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Threat Management</h3>
                                    <p>
                                        Proactive monitoring and management of
                                        potential security threats to prevent
                                        breaches and minimize risk exposure.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
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
                                <div className="service-content">
                                    <h3>Data Protection</h3>
                                    <p>
                                        Implementation of robust data protection
                                        measures to secure sensitive information
                                        and maintain regulatory compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Incident Response</h3>
                                    <p>
                                        Rapid response to security incidents to
                                        minimize impact and restore normal
                                        operations quickly and effectively.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Security Training</h3>
                                    <p>
                                        Comprehensive security awareness
                                        training for your team to ensure
                                        everyone understands their role in
                                        maintaining a secure environment.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                        <polyline points="7 3 7 8 15 8"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Compliance Management</h3>
                                    <p>
                                        Ensure your security protocols meet
                                        industry standards and regulatory
                                        requirements, including GDPR, HIPAA, PCI
                                        DSS, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cyber-approach">
                    <div className="cyber-approach-container">
                        <div className="cyber-approach-header">
                            <h2>Our Approach to Security</h2>
                            <p>
                                We implement a comprehensive, proactive security
                                strategy that evolves with the threat landscape
                                to ensure your organization remains protected.
                            </p>
                        </div>

                        <div className="approach-steps">
                            <div className="approach-step cyber-tech-card">
                                <div className="step-number">1</div>
                                <h4>Assess</h4>
                                <p>
                                    Comprehensive security assessment to
                                    identify vulnerabilities and evaluate your
                                    current security posture.
                                </p>
                            </div>
                            <div className="approach-step cyber-tech-card">
                                <div className="step-number">2</div>
                                <h4>Implement</h4>
                                <p>
                                    Deploy tailored security solutions and
                                    controls based on assessment findings and
                                    industry best practices.
                                </p>
                            </div>
                            <div className="approach-step cyber-tech-card">
                                <div className="step-number">3</div>
                                <h4>Monitor</h4>
                                <p>
                                    Continuous monitoring and threat detection
                                    to identify and respond to security
                                    incidents in real-time.
                                </p>
                            </div>
                            <div className="approach-step cyber-tech-card">
                                <div className="step-number">4</div>
                                <h4>Evolve</h4>
                                <p>
                                    Regular security updates and strategy
                                    refinement to address emerging threats and
                                    changing business requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cyber-benefits">
                    <div className="cyber-benefits-container">
                        <div className="cyber-benefits-header">
                            <h2>Benefits of Our Security Solutions</h2>
                            <p>
                                Our comprehensive security approach provides
                                numerous advantages that help your organization
                                stay protected while focusing on your core
                                business objectives.
                            </p>
                        </div>

                        <div className="benefits-list">
                            <div className="benefit-card cyber-benefit-card">
                                <h3>Enhanced Protection</h3>
                                <p>
                                    Comprehensive protection against a wide
                                    range of cyber threats, including malware,
                                    ransomware, and sophisticated phishing
                                    attacks.
                                </p>
                            </div>
                            <div className="benefit-card cyber-benefit-card">
                                <h3>Regulatory Compliance</h3>
                                <p>
                                    Ensure compliance with industry-specific
                                    regulations and data protection laws to
                                    avoid penalties and maintain customer trust.
                                </p>
                            </div>
                            <div className="benefit-card cyber-benefit-card">
                                <h3>Business Continuity</h3>
                                <p>
                                    Minimize downtime and data loss in the event
                                    of a security incident with robust recovery
                                    plans and backup solutions.
                                </p>
                            </div>
                            <div className="benefit-card cyber-benefit-card">
                                <h3>Peace of Mind</h3>
                                <p>
                                    Focus on your core business operations
                                    knowing your digital assets are protected by
                                    industry-leading security experts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cyber-success">
                    <div className="cyber-success-container">
                        <div className="cyber-success-content">
                            <h2>Our Cyber Security Track Record</h2>
                            <p>
                                See how our comprehensive cyber security
                                solutions have helped organizations across
                                various industries strengthen their security
                                posture, protect critical assets, and prevent
                                costly breaches. These success stories
                                demonstrate our commitment to excellence in
                                security services.
                            </p>
                        </div>
                        <div className="success-carousel">
                            <TestimonialsCarousel
                                testimonialIds={testimonialIds}
                                className="cyber-testimonials"
                                visibleCards={2}
                            />
                        </div>
                    </div>
                </section>

                <section className="cyber-contact">
                    <div className="cyber-contact-container">
                        <div className="cyber-contact-content">
                            <h2>Ready to Enhance Your Security Posture?</h2>
                            <p>
                                Contact our team of security experts to discuss
                                how we can help protect your organization from
                                evolving cyber threats and vulnerabilities.
                            </p>
                            <div className="cyber-contact-buttons">
                                <Link
                                    to="/contact"
                                    className="btn primary-btn"
                                    onClick={scrollToTop}
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    to="/about"
                                    className="btn secondary-btn"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        color: "#fff",
                                    }}
                                    onClick={scrollToTop}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CyberSecurity;
