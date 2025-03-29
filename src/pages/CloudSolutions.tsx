import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Solutions.css";

const CloudSolutions = () => {
    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="solution-hero">
                    <div className="solution-hero-container">
                        <h1>Cloud Solutions</h1>
                        <p>
                            Scalable and secure cloud infrastructure for your
                            business needs
                        </p>
                    </div>
                </section>

                <section className="solution-details">
                    <div className="solution-details-container">
                        <div className="solution-overview">
                            <h2>Overview</h2>
                            <p>
                                Team WMC provides comprehensive cloud solutions
                                to help businesses migrate, manage, and optimize
                                their cloud infrastructure. Our team of experts
                                will work with you to design and implement cloud
                                solutions that meet your specific business
                                requirements, ensuring scalability, security,
                                and cost-effectiveness.
                            </p>
                        </div>

                        <div className="solution-offerings">
                            <h2>Our Cloud Offerings</h2>
                            <div className="offerings-grid">
                                <div className="offering-card">
                                    <h3>Cloud Migration</h3>
                                    <p>
                                        Seamlessly migrate your existing
                                        infrastructure to the cloud with minimal
                                        disruption to your business operations.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Cloud Infrastructure</h3>
                                    <p>
                                        Design and implement scalable and secure
                                        cloud infrastructure tailored to your
                                        business needs.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Cloud Management</h3>
                                    <p>
                                        Ongoing management and optimization of
                                        your cloud environment to ensure optimal
                                        performance and cost-efficiency.
                                    </p>
                                </div>
                                <div className="offering-card">
                                    <h3>Hybrid Cloud</h3>
                                    <p>
                                        Integrate your on-premises
                                        infrastructure with cloud services for a
                                        seamless hybrid cloud solution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="solution-benefits">
                            <h2>Benefits</h2>
                            <ul className="benefits-list">
                                <li>
                                    <h4>Scalability</h4>
                                    <p>
                                        Easily scale your infrastructure up or
                                        down based on your business needs.
                                    </p>
                                </li>
                                <li>
                                    <h4>Cost Optimization</h4>
                                    <p>
                                        Reduce capital expenditure and optimize
                                        operational costs with pay-as-you-go
                                        pricing models.
                                    </p>
                                </li>
                                <li>
                                    <h4>Enhanced Security</h4>
                                    <p>
                                        Leverage advanced security features and
                                        compliance certifications offered by
                                        cloud providers.
                                    </p>
                                </li>
                                <li>
                                    <h4>Business Continuity</h4>
                                    <p>
                                        Ensure business continuity with reliable
                                        disaster recovery and backup solutions.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="solution-cta">
                            <h2>
                                Ready to Transform Your Cloud Infrastructure?
                            </h2>
                            <p>
                                Contact our team of cloud experts to discuss how
                                we can help you leverage the full potential of
                                cloud technology for your business.
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

export default CloudSolutions;
