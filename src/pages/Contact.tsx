import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "general",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or email service
        console.log("Form submitted:", formData);
        setFormSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
                service: "general",
            });
        }, 5000);
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="contact-hero">
                    <div className="contact-hero-container">
                        <h1>Contact Us</h1>
                        <p>
                            Get in touch with our team of experts to discuss
                            your IT needs
                        </p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>
                                Our team is ready to answer your questions and
                                discuss how Team WMC can help address your
                                business's technology needs.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <h3>Email</h3>
                                    <p>info@teamwmc.com</p>
                                </div>
                                <div className="contact-method">
                                    <h3>Phone</h3>
                                    <p>(123) 456-7890</p>
                                </div>
                                <div className="contact-method">
                                    <h3>Address</h3>
                                    <p>
                                        123 Tech Lane, Suite 100
                                        <br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                            </div>

                            <div className="business-hours">
                                <h3>Business Hours</h3>
                                <p>
                                    Monday - Friday: 9:00 AM - 5:00 PM
                                    <br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2>Send Us a Message</h2>
                            {formSubmitted ? (
                                <div className="form-success">
                                    <h3>Thank you for contacting us!</h3>
                                    <p>
                                        We have received your message and will
                                        get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">
                                            Service of Interest*
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="general">
                                                General Inquiry
                                            </option>
                                            <option value="cloud">
                                                Cloud Solutions
                                            </option>
                                            <option value="security">
                                                Cyber Security
                                            </option>
                                            <option value="networking">
                                                Networking
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            Message*
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn primary-btn"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
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

export default Contact;
