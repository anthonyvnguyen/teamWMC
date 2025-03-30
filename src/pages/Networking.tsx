import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import "../styles/Solutions.css";
import "../styles/Networking.css";

const Networking = () => {
    // Define testimonial IDs related to networking for the carousel
    const testimonialIds = [1, 4, 6];

    // Function to scroll to top when navigating
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="networking-hero">
                    <div className="networking-hero-container">
                        <div className="networking-hero-content">
                            <h1>
                                Advanced{" "}
                                <span className="green-highlight">
                                    Networking
                                </span>{" "}
                                Solutions
                            </h1>
                            <p>
                                Building reliable, high-performance, and secure
                                networks to power your business operations
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
                        <div className="networking-hero-image">
                            <svg
                                width="150"
                                height="150"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 2v6l3 3 3-3V2M12 16v6M8 16H4v-2c0-1.1.9-2 2-2h2M16 16h4v-2c0-1.1-.9-2-2-2h-2M16 8h4v2c0 1.1-.9 2-2 2h-2M8 8H4v2c0 1.1.9 2 2 2h2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                <section className="networking-services">
                    <div className="networking-services-container">
                        <div className="networking-services-header">
                            <h2>Our Networking Services</h2>
                            <p>
                                Team WMC delivers comprehensive networking
                                solutions designed to optimize connectivity,
                                enhance performance, and ensure reliability
                                across your entire infrastructure. Our expert
                                team designs and implements scalable network
                                architectures tailored to your specific needs.
                            </p>
                        </div>

                        <div className="networking-services-grid">
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
                                    <h3>Network Design & Implementation</h3>
                                    <p>
                                        Custom network architecture design and
                                        implementation to provide optimal
                                        performance, reliability, and
                                        scalability for your business
                                        requirements.
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
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Network Performance Optimization</h3>
                                    <p>
                                        Comprehensive analysis and optimization
                                        of your network infrastructure to
                                        eliminate bottlenecks and ensure maximum
                                        throughput and efficiency.
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
                                        <circle cx="12" cy="11" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Network Security Solutions</h3>
                                    <p>
                                        Robust network security implementations
                                        including firewalls, intrusion
                                        detection, and prevention systems to
                                        protect your network from external
                                        threats.
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
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Wireless Networking</h3>
                                    <p>
                                        Design and implementation of secure,
                                        high-performance wireless networks for
                                        complete coverage and seamless
                                        connectivity across your facilities.
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
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Remote Access Solutions</h3>
                                    <p>
                                        Secure remote access solutions that
                                        enable your team to work from anywhere
                                        while maintaining the security and
                                        integrity of your network.
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
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                            x1="12"
                                            y1="8"
                                            x2="12"
                                            y2="12"
                                        ></line>
                                        <line
                                            x1="12"
                                            y1="16"
                                            x2="12.01"
                                            y2="16"
                                        ></line>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Network Monitoring & Management</h3>
                                    <p>
                                        Proactive monitoring and management of
                                        your network infrastructure to identify
                                        and resolve issues before they impact
                                        your business operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="networking-tech">
                    <div className="networking-tech-container">
                        <div className="networking-tech-header">
                            <h2>Technologies We Leverage</h2>
                            <p>
                                We utilize industry-leading technologies and
                                best practices to deliver high-performance,
                                secure, and reliable networking solutions for
                                your business.
                            </p>
                        </div>

                        <div className="tech-grid">
                            <div className="tech-card networking-tech-card">
                                <div className="tech-icon networking-tech-icon">
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
                                <h3>Enterprise Routing & Switching</h3>
                                <p>
                                    Advanced routing and switching solutions
                                    from leading vendors to ensure optimal
                                    network performance and reliability.
                                </p>
                            </div>

                            <div className="tech-card networking-tech-card">
                                <div className="tech-icon networking-tech-icon">
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
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                        <path d="M2 17l10 5 10-5"></path>
                                        <path d="M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                                <h3>SD-WAN Solutions</h3>
                                <p>
                                    Software-defined wide area network
                                    technologies that optimize connectivity and
                                    performance across multiple locations.
                                </p>
                            </div>

                            <div className="tech-card networking-tech-card">
                                <div className="tech-icon networking-tech-icon">
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
                                        <path d="M20 16l-8-8-8 8"></path>
                                        <path d="M4 4v16"></path>
                                        <path d="M20 20V8"></path>
                                    </svg>
                                </div>
                                <h3>Network Virtualization</h3>
                                <p>
                                    Virtual network infrastructures that enhance
                                    flexibility, security, and resource
                                    utilization across your environment.
                                </p>
                            </div>

                            <div className="tech-card networking-tech-card">
                                <div className="tech-icon networking-tech-icon">
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
                                        <line
                                            x1="2"
                                            y1="12"
                                            x2="22"
                                            y2="12"
                                        ></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </div>
                                <h3>Cloud Networking</h3>
                                <p>
                                    Seamless connectivity between on-premises
                                    infrastructure and cloud environments for
                                    hybrid and multi-cloud deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="networking-benefits">
                    <div className="networking-benefits-container">
                        <div className="networking-benefits-header">
                            <h2>Benefits of Our Networking Solutions</h2>
                            <p>
                                Our comprehensive networking approach provides
                                numerous advantages that help your organization
                                improve connectivity, enhance security, and
                                optimize performance.
                            </p>
                        </div>

                        <div className="benefits-list">
                            <div className="benefit-card networking-benefit-card">
                                <h3>Improved Performance</h3>
                                <p>
                                    Optimize network traffic flow and eliminate
                                    bottlenecks to ensure maximum throughput and
                                    minimal latency for critical applications.
                                </p>
                            </div>
                            <div className="benefit-card networking-benefit-card">
                                <h3>Enhanced Security</h3>
                                <p>
                                    Implement robust security measures at every
                                    layer of your network to protect against
                                    unauthorized access and external threats.
                                </p>
                            </div>
                            <div className="benefit-card networking-benefit-card">
                                <h3>Increased Reliability</h3>
                                <p>
                                    Build redundant, fault-tolerant network
                                    architectures to minimize downtime and
                                    ensure business continuity.
                                </p>
                            </div>
                            <div className="benefit-card networking-benefit-card">
                                <h3>Scalable Architecture</h3>
                                <p>
                                    Design flexible network infrastructures that
                                    can grow with your business without
                                    requiring complete redesigns or significant
                                    disruptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="networking-success">
                    <div className="networking-success-container">
                        <div className="networking-success-content">
                            <h2>Our Networking Track Record</h2>
                            <p>
                                Our networking solutions have helped
                                organizations of all sizes improve connectivity,
                                enhance performance, and ensure reliability. See
                                how our clients have transformed their network
                                infrastructure to support their business
                                objectives.
                            </p>
                        </div>
                        <div className="success-carousel">
                            <TestimonialsCarousel
                                testimonialIds={testimonialIds}
                                className="networking-testimonials"
                                visibleCards={2}
                            />
                        </div>
                    </div>
                </section>
                <section className="networking-contact">
                    <div className="networking-contact-container">
                        <div className="networking-contact-content">
                            <h2>Ready to Transform Your Network?</h2>
                            <p>
                                Contact our team of networking experts to
                                discuss how we can help design, implement, and
                                optimize your network infrastructure to support
                                your business objectives.
                            </p>
                            <div className="networking-contact-buttons">
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

export default Networking;
