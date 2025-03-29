import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="about-hero">
                    <div className="about-hero-container">
                        <h1>About Us</h1>
                        <p>
                            Learn more about Team WMC and our mission to
                            transform digital landscapes
                        </p>
                    </div>
                </section>

                <section className="about-section">
                    <div className="about-container">
                        <div className="about-story">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2015, Team WMC began with a simple
                                mission: to help businesses navigate the
                                complexities of the digital world. What started
                                as a small team of passionate technologists has
                                grown into a comprehensive IT solutions provider
                                serving clients across industries.
                            </p>
                            <p>
                                Our journey has been defined by a commitment to
                                innovation, technical excellence, and customer
                                satisfaction. As technology evolves, so do we,
                                continuously expanding our expertise to address
                                the ever-changing digital landscape.
                            </p>
                            <p>
                                Today, Team WMC is proud to offer end-to-end
                                solutions in cloud computing, cyber security,
                                and networking, helping organizations of all
                                sizes achieve their digital transformation
                                goals.
                            </p>
                        </div>

                        <div className="mission-vision">
                            <div className="mission-box">
                                <h3>Our Mission</h3>
                                <p>
                                    To empower businesses with innovative
                                    technology solutions that drive growth,
                                    enhance security, and optimize performance.
                                </p>
                            </div>
                            <div className="vision-box">
                                <h3>Our Vision</h3>
                                <p>
                                    To be the trusted technology partner for
                                    businesses worldwide, leading the way in
                                    digital transformation and technological
                                    advancement.
                                </p>
                            </div>
                        </div>

                        <div className="values-section">
                            <h2>Our Core Values</h2>
                            <div className="values-grid">
                                <div className="value-card">
                                    <div className="value-icon">🚀</div>
                                    <h3>Innovation</h3>
                                    <p>
                                        We embrace new technologies and ideas,
                                        constantly seeking better ways to solve
                                        complex problems.
                                    </p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🤝</div>
                                    <h3>Collaboration</h3>
                                    <p>
                                        We work closely with our clients,
                                        forming partnerships built on trust and
                                        mutual success.
                                    </p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🎯</div>
                                    <h3>Excellence</h3>
                                    <p>
                                        We strive for excellence in everything
                                        we do, from technical implementation to
                                        customer service.
                                    </p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🛡️</div>
                                    <h3>Integrity</h3>
                                    <p>
                                        We uphold the highest standards of
                                        honesty, transparency, and ethical
                                        conduct in all our dealings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="team-section">
                            <h2>Our Leadership Team</h2>
                            <div className="team-grid">
                                <div className="team-member">
                                    <div className="member-image placeholder-avatar"></div>
                                    <h3>John Doe</h3>
                                    <p className="member-role">CEO & Founder</p>
                                    <p className="member-bio">
                                        With over 20 years of experience in
                                        technology, John leads Team WMC's
                                        strategic vision and operations.
                                    </p>
                                </div>
                                <div className="team-member">
                                    <div className="member-image placeholder-avatar"></div>
                                    <h3>Jane Smith</h3>
                                    <p className="member-role">CTO</p>
                                    <p className="member-bio">
                                        Jane brings extensive expertise in cloud
                                        architecture and cybersecurity to drive
                                        our technical innovation.
                                    </p>
                                </div>
                                <div className="team-member">
                                    <div className="member-image placeholder-avatar"></div>
                                    <h3>Michael Johnson</h3>
                                    <p className="member-role">
                                        VP of Operations
                                    </p>
                                    <p className="member-bio">
                                        Michael ensures smooth delivery of our
                                        services and maintains our high
                                        standards of quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <h2>Join Our Journey</h2>
                            <p>
                                Are you ready to transform your digital
                                landscape with Team WMC? Let's discuss how our
                                solutions can help your business thrive in the
                                digital age.
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

export default About;
