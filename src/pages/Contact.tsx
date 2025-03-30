import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
                {/* Hero Section */}
                <section className="contact-hero">
                    <div className="contact-hero-container">
                        <h1>Contact Us</h1>
                        <p>
                            Get in touch with our team of experts to discuss
                            your IT needs
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section">
                    <div className="contact-container">
                        {/* Left Column: Contact Info */}
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

                        {/* Right Column: Contact Form */}
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
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
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
                                        <label htmlFor="email">Email *</label>
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
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
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
                                            Service *
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
                                            <option value="web-dev">
                                                Web Development
                                            </option>
                                            <option value="app-dev">
                                                Application Development
                                            </option>
                                            <option value="support">
                                                Technical Support
                                            </option>
                                            <option value="consultation">
                                                IT Consultation
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
