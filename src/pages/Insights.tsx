import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Insights.css";

// Define the structure for insight items
interface InsightItem {
    id: number;
    category: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
}

const Insights = () => {
    // Sample insights data
    const allInsights: InsightItem[] = [
        {
            id: 1,
            category: "Cloud",
            title: "The Future of Cloud Computing in 2023",
            description: "Explore the emerging trends and technologies shaping the future of cloud computing in 2023 and beyond.",
            date: "June 15, 2023",
            readTime: "5 min read"
        },
        {
            id: 2,
            category: "Cyber Security",
            title: "Top 10 Cyber Security Threats to Watch Out For",
            description: "Learn about the most common cyber security threats facing businesses today and how to protect your organization.",
            date: "May 22, 2023",
            readTime: "8 min read"
        },
        {
            id: 3,
            category: "Networking",
            title: "How SD-WAN is Transforming Business Networking",
            description: "Discover how software-defined WAN technology is revolutionizing enterprise networking and connectivity.",
            date: "April 10, 2023",
            readTime: "6 min read"
        },
        {
            id: 4,
            category: "Cloud",
            title: "Best Practices for Cloud Migration",
            description: "Follow these essential best practices to ensure a smooth and successful cloud migration for your business.",
            date: "March 18, 2023",
            readTime: "7 min read"
        },
        {
            id: 5,
            category: "Cyber Security",
            title: "The Importance of Employee Security Training",
            description: "Why employee security awareness is your first line of defense against cyber attacks and how to implement effective training.",
            date: "February 25, 2023",
            readTime: "4 min read"
        },
        {
            id: 6,
            category: "Networking",
            title: "5G and the Future of Business Connectivity",
            description: "How 5G technology will impact business connectivity and create new opportunities for innovation and growth.",
            date: "January 15, 2023",
            readTime: "5 min read"
        }
    ];

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(allInsights.length / ITEMS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(1);

    // Only show the pagination if there are more than 6 stories
    const showPagination = allInsights.length > ITEMS_PER_PAGE;

    // Get current page of insights
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentInsights = allInsights.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
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
                            {currentInsights.map((insight) => (
                                <div className="insight-card" key={insight.id}>
                                    <div className="insight-image placeholder-image"></div>
                                    <div className="insight-content">
                                        <span className="insight-category">
                                            {insight.category}
                                        </span>
                                        <h3>{insight.title}</h3>
                                        <p>{insight.description}</p>
                                        <div className="insight-meta">
                                            <span className="insight-date">
                                                {insight.date}
                                            </span>
                                            <span className="insight-read">
                                                {insight.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {showPagination && (
                            <div className="insights-pagination">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button 
                                        key={i + 1}
                                        className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                        onClick={() => goToPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button 
                                        className="pagination-btn"
                                        onClick={() => goToPage(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Insights;
