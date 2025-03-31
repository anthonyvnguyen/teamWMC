import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { testimonials, Testimonial } from "../data/testimonialData";
import "../styles/Insights.css";

const SuccessStories = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
        []
    );
    const [filteredTestimonials, setFilteredTestimonials] =
        useState<Testimonial[]>(testimonials);
    const [currentPage, setCurrentPage] = useState(1);

    // Extract unique technologies for filter options
    const allTechnologies = Array.from(
        new Set(
            testimonials.flatMap((testimonial) =>
                testimonial.technologies.map((tech) => tech.toUpperCase())
            )
        )
    ).sort();

    // Filter testimonials based on search term and selected technologies
    useEffect(() => {
        const filtered = testimonials.filter((testimonial) => {
            // Search term filter (check title, description, author)
            const searchMatch =
                searchTerm === "" ||
                testimonial.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                testimonial.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                testimonial.author.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            // Technology filter
            const techMatch =
                selectedTechnologies.length === 0 ||
                selectedTechnologies.some((tech) =>
                    testimonial.technologies
                        .map((t) => t.toUpperCase())
                        .includes(tech)
                );

            return searchMatch && techMatch;
        });

        setFilteredTestimonials(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [searchTerm, selectedTechnologies]);

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(filteredTestimonials.length / ITEMS_PER_PAGE);

    // Get current page of testimonials
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentTestimonials = filteredTestimonials.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    // Toggle technology filter
    const toggleTechnology = (tech: string) => {
        if (selectedTechnologies.includes(tech)) {
            setSelectedTechnologies(
                selectedTechnologies.filter((t) => t !== tech)
            );
        } else {
            setSelectedTechnologies([...selectedTechnologies, tech]);
        }
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedTechnologies([]);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="page-container">
            <Navbar />

            <main>
                <section className="insights-hero">
                    <div className="insights-hero-container">
                        <h1>Success Stories</h1>
                        <p>
                            Discover how we've helped organizations achieve
                            their goals with our innovative solutions
                        </p>
                    </div>
                </section>

                <section className="insights-section">
                    <div className="insights-container">
                        <div className="search-filter-container">
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="Search success stories..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="search-input"
                                />
                            </div>
                            <div className="filter-container">
                                <div className="filter-label">
                                    Filter by technology:
                                </div>
                                <div className="filter-tags">
                                    {allTechnologies.map((tech) => (
                                        <button
                                            key={tech}
                                            className={`filter-tag ${
                                                selectedTechnologies.includes(
                                                    tech
                                                )
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                toggleTechnology(tech)
                                            }
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                                {(searchTerm ||
                                    selectedTechnologies.length > 0) && (
                                    <button
                                        className="clear-filters"
                                        onClick={clearFilters}
                                    >
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        </div>

                        {filteredTestimonials.length === 0 ? (
                            <div className="no-results">
                                <p>
                                    No success stories found matching your
                                    criteria. Try adjusting your filters.
                                </p>
                                <button
                                    className="btn outline-btn"
                                    onClick={clearFilters}
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="insights-grid">
                                    {currentTestimonials.map((testimonial) => (
                                        <div
                                            className="insight-card"
                                            key={testimonial.id}
                                        >
                                            <div
                                                className="insight-image"
                                                style={
                                                    testimonial.imageUrl
                                                        ? {
                                                            backgroundImage: `url(${testimonial.imageUrl})`,
                                                            backgroundSize:
                                                                "cover",
                                                            backgroundPosition:
                                                                "center",
                                                        }
                                                        : undefined
                                                }
                                            ></div>
                                            <div className="insight-content">
                                                <h3>{testimonial.title}</h3>
                                                <p className="testimonial-description">
                                                    "{testimonial.description}"
                                                </p>
                                                <div className="author-info">
                                                    <span className="author-name">
                                                        {
                                                            testimonial.author
                                                                .name
                                                        }
                                                    </span>
                                                    <span className="author-title">
                                                        {
                                                            testimonial.author
                                                                .title
                                                        }
                                                    </span>
                                                </div>
                                                <div className="technology-tags">
                                                    {testimonial.technologies.map(
                                                        (tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="technology-tag"
                                                                onClick={() =>
                                                                    toggleTechnology(
                                                                        tech
                                                                    )
                                                                }
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <div className="insights-pagination">
                                        {Array.from(
                                            { length: totalPages },
                                            (_, i) => (
                                                <button
                                                    key={i + 1}
                                                    className={`pagination-btn ${
                                                        currentPage === i + 1
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        goToPage(i + 1)
                                                    }
                                                >
                                                    {i + 1}
                                                </button>
                                            )
                                        )}
                                        {currentPage < totalPages && (
                                            <button
                                                className="pagination-btn"
                                                onClick={() =>
                                                    goToPage(currentPage + 1)
                                                }
                                            >
                                                Next
                                            </button>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SuccessStories;
