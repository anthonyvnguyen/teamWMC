import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Solutions.css";

const Networking = () => {
    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="solution-hero networking-hero">
                    <div className="solution-hero-container">
                        <h1>Networking Solutions</h1>
                        <p>
                            Reliable and scalable networking infrastructure for
                            modern businesses
                        </p>
                    </div>
                </section>

                <section className="solution-details">
                    <div className="solution-details-container">
                        <div className="solution-overview">
                            <h2>Overview</h2>
                            <p>
                                Team WMC provides end-to-end networking
                                solutions to help businesses build, maintain,
                                and optimize their network infrastructure. Our
                                team of networking experts designs and
                                implements reliable, secure, and scalable
                                networks that support your business operations
                                and growth objectives.
                            </p>
                        </div>

                        <div className="solution-offerings">
                            <h2>Our Networking Offerings</h2>
                            <div className="offerings-grid">
                                <div className="offering-card">
                                    <h3>Network Design</h3>
                                    <p>
                                        Custom network architecture design that
                                        meets your specific business
                                        requirements and performance needs.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Implementation</h3>
                                    <p>
                                        Professional installation and
                                        configuration of network equipment and
                                        infrastructure with minimal disruption.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Network Security</h3>
                                    <p>
                                        Comprehensive security measures to
                                        protect your network from unauthorized
                                        access and cyber threats.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Managed Services</h3>
                                    <p>
                                        Ongoing management, monitoring, and
                                        optimization of your network
                                        infrastructure to ensure optimal
                                        performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="networking-technologies">
                            <h2>Technologies We Work With</h2>
                            <div className="technologies-list">
                                <div className="technology-item">
                                    <h4>LAN/WAN</h4>
                                    <p>
                                        Local and wide area network solutions
                                        for reliable connectivity across your
                                        organization.
                                    </p>
                                </div>
                                <div className="technology-item">
                                    <h4>SD-WAN</h4>
                                    <p>
                                        Software-defined WAN for improved
                                        network performance and
                                        cost-effectiveness.
                                    </p>
                                </div>
                                <div className="technology-item">
                                    <h4>VPN</h4>
                                    <p>
                                        Secure virtual private networks for
                                        remote access and site-to-site
                                        connectivity.
                                    </p>
                                </div>
                                <div className="technology-item">
                                    <h4>Wireless Networks</h4>
                                    <p>
                                        High-performance wireless solutions for
                                        mobility and flexibility.
                                    </p>
                                </div>
                                <div className="technology-item">
                                    <h4>Network Virtualization</h4>
                                    <p>
                                        Virtualization technologies to optimize
                                        network resources and improve
                                        management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="solution-benefits">
                            <h2>Benefits</h2>
                            <ul className="benefits-list">
                                <li>
                                    <h4>Improved Performance</h4>
                                    <p>
                                        Optimize network performance to ensure
                                        fast and reliable connectivity for all
                                        users and applications.
                                    </p>
                                </li>
                                <li>
                                    <h4>Enhanced Security</h4>
                                    <p>
                                        Protect your network from cyber threats
                                        with robust security measures and
                                        monitoring.
                                    </p>
                                </li>
                                <li>
                                    <h4>Scalability</h4>
                                    <p>
                                        Easily scale your network infrastructure
                                        as your business grows and requirements
                                        change.
                                    </p>
                                </li>
                                <li>
                                    <h4>Cost Optimization</h4>
                                    <p>
                                        Reduce operational costs through
                                        efficient network design and management.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="solution-cta">
                            <h2>
                                Ready to Upgrade Your Network Infrastructure?
                            </h2>
                            <p>
                                Contact our team of networking experts to
                                discuss how we can help you build a reliable and
                                secure network infrastructure for your business.
                            </p>
                            <Link to="/contact" className="btn primary-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img
                            src={require("../assets/images/wmc_logo.png")}
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
};

export default Networking;
