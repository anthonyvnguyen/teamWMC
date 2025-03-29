import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Insights.css";

const Insights = () => {
    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="insights-hero">
                    <div className="insights-hero-container">
                        <h1>Insights</h1>
                        <p>
                            The latest trends, news, and updates in the world of
                            technology
                        </p>
                    </div>
                </section>

                <section className="insights-section">
                    <div className="insights-container">
                        <div className="insights-grid">
                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Cloud
                                    </span>
                                    <h3>
                                        The Future of Cloud Computing in 2023
                                    </h3>
                                    <p>
                                        Explore the emerging trends and
                                        technologies shaping the future of cloud
                                        computing in 2023 and beyond.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            June 15, 2023
                                        </span>
                                        <span className="insight-read">
                                            5 min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Cyber Security
                                    </span>
                                    <h3>
                                        Top 10 Cyber Security Threats to Watch
                                        Out For
                                    </h3>
                                    <p>
                                        Learn about the most common cyber
                                        security threats facing businesses today
                                        and how to protect your organization.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            May 22, 2023
                                        </span>
                                        <span className="insight-read">
                                            8 min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Networking
                                    </span>
                                    <h3>
                                        How SD-WAN is Transforming Business
                                        Networking
                                    </h3>
                                    <p>
                                        Discover how software-defined WAN
                                        technology is revolutionizing enterprise
                                        networking and connectivity.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            April 10, 2023
                                        </span>
                                        <span className="insight-read">
                                            6 min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Cloud
                                    </span>
                                    <h3>Best Practices for Cloud Migration</h3>
                                    <p>
                                        Follow these essential best practices to
                                        ensure a smooth and successful cloud
                                        migration for your business.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            March 18, 2023
                                        </span>
                                        <span className="insight-read">
                                            7 min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Cyber Security
                                    </span>
                                    <h3>
                                        The Importance of Employee Security
                                        Training
                                    </h3>
                                    <p>
                                        Why employee security awareness is your
                                        first line of defense against cyber
                                        attacks and how to implement effective
                                        training.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            February 25, 2023
                                        </span>
                                        <span className="insight-read">
                                            4 min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-image placeholder-image"></div>
                                <div className="insight-content">
                                    <span className="insight-category">
                                        Networking
                                    </span>
                                    <h3>
                                        5G and the Future of Business
                                        Connectivity
                                    </h3>
                                    <p>
                                        How 5G technology will impact business
                                        connectivity and create new
                                        opportunities for innovation and growth.
                                    </p>
                                    <div className="insight-meta">
                                        <span className="insight-date">
                                            January 15, 2023
                                        </span>
                                        <span className="insight-read">
                                            5 min read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="insights-pagination">
                            <button className="pagination-btn active">1</button>
                            <button className="pagination-btn">2</button>
                            <button className="pagination-btn">3</button>
                            <button className="pagination-btn">Next</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Insights;
