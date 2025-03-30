import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import "../styles/Solutions.css";
import "../styles/CloudSolutions.css";

const CloudSolutions = () => {
    // Define testimonial IDs to be displayed in the carousel
    const testimonialIds = [1, 2, 3, 4, 5, 6];

    // Function to scroll to top when navigating
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="cloud-hero">
                    <div className="cloud-hero-container">
                        <div className="cloud-hero-content">
                            <h1>
                                Unleash the Full Potential of the{" "}
                                <span className="blue-highlight">Cloud</span>
                            </h1>
                            <p>
                                Secure, Scalable, and Future-Ready Cloud
                                Solutions for Your Business
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
                        <div className="cloud-hero-image">
                            <svg
                                width="150"
                                height="150"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                <section className="cloud-services">
                    <div className="cloud-services-container">
                        <div className="cloud-services-header">
                            <h2>Comprehensive Cloud Solutions</h2>
                            <p>
                                At Team WMC, we help businesses leverage the
                                cloud to drive agility, efficiency, and
                                innovation. Whether you're migrating,
                                modernizing, or optimizing, our comprehensive
                                cloud services ensure seamless and secure
                                digital transformation.
                            </p>
                        </div>

                        <div className="cloud-services-grid">
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
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Cloud Migration</h3>
                                    <p>
                                        Transition smoothly to the cloud with
                                        minimal disruption, enhancing
                                        scalability and reducing costs.
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
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Cloud Operations</h3>
                                    <p>
                                        Maintain peak performance with our 24/7
                                        managed services, ensuring reliability
                                        and security.
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
                                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Modernization</h3>
                                    <p>
                                        Revitalize legacy applications to meet
                                        modern demands, improving functionality
                                        and user experience.
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
                                            y="3"
                                            width="20"
                                            height="14"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <line
                                            x1="8"
                                            y1="21"
                                            x2="16"
                                            y2="21"
                                        ></line>
                                        <line
                                            x1="12"
                                            y1="17"
                                            x2="12"
                                            y2="21"
                                        ></line>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Data & Analytics</h3>
                                    <p>
                                        Leverage data-driven insights to make
                                        informed decisions and drive business
                                        growth.
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
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                        <polyline points="13 2 13 9 20 9"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Multi-Cloud Solutions</h3>
                                    <p>
                                        Optimize your IT environment with
                                        tailored hybrid and multi-cloud
                                        strategies that align with your business
                                        goals.
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
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Cloud Security</h3>
                                    <p>
                                        Protect your cloud infrastructure with
                                        comprehensive security solutions that
                                        safeguard your data and applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cloud-tech">
                    <div className="cloud-tech-container">
                        <div className="cloud-tech-header">
                            <h2>Cloud Technologies We Leverage</h2>
                            <p>
                                We utilize leading cloud platforms and
                                technologies to deliver scalable, reliable, and
                                secure solutions tailored to your specific
                                business needs.
                            </p>
                        </div>

                        <div className="tech-grid">
                            <div className="tech-card cloud-tech-card">
                                <div className="tech-icon cloud-tech-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="60"
                                        height="60"
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
                                <h3>AWS Cloud</h3>
                                <p>
                                    Amazon Web Services provides a comprehensive
                                    suite of cloud services, enabling scalable
                                    and flexible infrastructure for your
                                    business.
                                </p>
                            </div>

                            <div className="tech-card cloud-tech-card">
                                <div className="tech-icon cloud-tech-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    </svg>
                                </div>
                                <h3>Microsoft Azure</h3>
                                <p>
                                    Azure's integrated cloud services and
                                    solutions provide a secure and reliable
                                    platform for your enterprise applications.
                                </p>
                            </div>

                            <div className="tech-card cloud-tech-card">
                                <div className="tech-icon cloud-tech-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                    </svg>
                                </div>
                                <h3>Google Cloud Platform</h3>
                                <p>
                                    GCP offers powerful infrastructure and
                                    advanced analytics to help you build
                                    scalable and intelligent cloud solutions.
                                </p>
                            </div>

                            <div className="tech-card cloud-tech-card">
                                <div className="tech-icon cloud-tech-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="60"
                                        height="60"
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
                                <h3>Containerization</h3>
                                <p>
                                    Docker, Kubernetes, and other
                                    containerization technologies enable
                                    efficient deployment and management of your
                                    applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cloud-benefits">
                    <div className="cloud-benefits-container">
                        <div className="cloud-benefits-header">
                            <h2>Benefits of Our Cloud Solutions</h2>
                            <p>
                                Discover how our cloud solutions can transform
                                your business, providing numerous advantages to
                                help you achieve your goals.
                            </p>
                        </div>

                        <div className="benefits-list">
                            <div className="benefit-card cloud-benefit-card">
                                <h3>Enhanced Scalability</h3>
                                <p>
                                    Easily scale your resources up or down based
                                    on demand, ensuring optimal performance
                                    during peak periods without overprovisioning
                                    during slower times.
                                </p>
                            </div>
                            <div className="benefit-card cloud-benefit-card">
                                <h3>Cost Optimization</h3>
                                <p>
                                    Reduce capital expenditure and operational
                                    costs by leveraging pay-as-you-go models and
                                    eliminating the need for extensive
                                    on-premises infrastructure.
                                </p>
                            </div>
                            <div className="benefit-card cloud-benefit-card">
                                <h3>Improved Agility</h3>
                                <p>
                                    Accelerate time-to-market with rapid
                                    provisioning of resources and streamlined
                                    development processes, helping you respond
                                    quickly to market changes.
                                </p>
                            </div>
                            <div className="benefit-card cloud-benefit-card">
                                <h3>Global Reach</h3>
                                <p>
                                    Deploy your applications globally in
                                    minutes, providing low-latency experiences
                                    to users worldwide while maintaining
                                    centralized management.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cloud-success">
                    <div className="cloud-success-container">
                        <div className="cloud-success-content">
                            <h2>Our Cloud Track Record</h2>
                            <p>
                                Our cloud solutions have transformed businesses
                                across industries, helping them achieve greater
                                efficiency, scalability, and security while
                                reducing costs. See how our clients have
                                leveraged the cloud to drive innovation and
                                growth.
                            </p>
                        </div>
                        <div className="success-carousel">
                            <TestimonialsCarousel
                                testimonialIds={testimonialIds}
                                className="cloud-testimonials"
                                visibleCards={2}
                            />
                        </div>
                    </div>
                </section>
                <section className="cloud-contact">
                    <div className="cloud-contact-container">
                        <div className="cloud-contact-content">
                            <h2>
                                Ready to Transform Your Business with Cloud
                                Solutions?
                            </h2>
                            <p>
                                Contact our cloud experts today to discuss how
                                we can help you leverage the full potential of
                                cloud technology to drive innovation and growth
                                for your business.
                            </p>
                            <div className="cloud-contact-buttons">
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

export default CloudSolutions;
