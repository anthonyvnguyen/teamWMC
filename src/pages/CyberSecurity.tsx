import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Solutions.css";

const CyberSecurity = () => {
    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="solution-hero security-hero">
                    <div className="solution-hero-container">
                        <h1>Cyber Security Solutions</h1>
                        <p>
                            Protecting your digital assets against evolving
                            cyber threats
                        </p>
                    </div>
                </section>

                <section className="solution-details">
                    <div className="solution-details-container">
                        <div className="solution-overview">
                            <h2>Overview</h2>
                            <p>
                                Team WMC provides comprehensive cyber security
                                solutions to protect your organization's
                                critical data and systems from constantly
                                evolving cyber threats. Our team of security
                                experts implements industry-leading security
                                measures and best practices to ensure your
                                digital assets remain secure, while maintaining
                                compliance with relevant regulations.
                            </p>
                        </div>

                        <div className="solution-offerings">
                            <h2>Our Security Offerings</h2>
                            <div className="offerings-grid">
                                <div className="offering-card">
                                    <h3>Security Assessment</h3>
                                    <p>
                                        Comprehensive security assessment to
                                        identify vulnerabilities in your systems
                                        and networks.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Threat Management</h3>
                                    <p>
                                        Proactive monitoring and management of
                                        potential security threats to prevent
                                        breaches.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Data Protection</h3>
                                    <p>
                                        Implementation of robust data protection
                                        measures to secure sensitive information
                                        and maintain compliance.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Incident Response</h3>
                                    <p>
                                        Rapid response to security incidents to
                                        minimize impact and restore normal
                                        operations quickly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="solution-benefits">
                            <h2>Benefits</h2>
                            <ul className="benefits-list">
                                <li>
                                    <h4>Enhanced Protection</h4>
                                    <p>
                                        Comprehensive protection against a wide
                                        range of cyber threats, including
                                        malware, ransomware, and phishing.
                                    </p>
                                </li>
                                <li>
                                    <h4>Regulatory Compliance</h4>
                                    <p>
                                        Ensure compliance with industry-specific
                                        regulations and data protection laws.
                                    </p>
                                </li>
                                <li>
                                    <h4>Business Continuity</h4>
                                    <p>
                                        Minimize downtime and data loss in the
                                        event of a security incident.
                                    </p>
                                </li>
                                <li>
                                    <h4>Peace of Mind</h4>
                                    <p>
                                        Focus on your core business operations
                                        knowing your digital assets are
                                        protected.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="security-approach">
                            <h2>Our Approach to Security</h2>
                            <div className="approach-steps">
                                <div className="approach-step">
                                    <span className="step-number">1</span>
                                    <h4>Assess</h4>
                                    <p>
                                        Comprehensive assessment of your current
                                        security posture and potential
                                        vulnerabilities.
                                    </p>
                                </div>
                                <div className="approach-step">
                                    <span className="step-number">2</span>
                                    <h4>Implement</h4>
                                    <p>
                                        Implementation of robust security
                                        measures tailored to your specific
                                        needs.
                                    </p>
                                </div>
                                <div className="approach-step">
                                    <span className="step-number">3</span>
                                    <h4>Monitor</h4>
                                    <p>
                                        Continuous monitoring of your systems to
                                        detect and respond to potential threats.
                                    </p>
                                </div>
                                <div className="approach-step">
                                    <span className="step-number">4</span>
                                    <h4>Evolve</h4>
                                    <p>
                                        Regular updates and improvements to your
                                        security strategy to address emerging
                                        threats.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="solution-cta">
                            <h2>Ready to Enhance Your Security Posture?</h2>
                            <p>
                                Contact our team of security experts to discuss
                                how we can help protect your organization from
                                evolving cyber threats.
                            </p>
                            <Link to="/contact" className="btn primary-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CyberSecurity;
