import React, { useEffect, useRef, useState } from "react";
import "./TestimonialsCarousel.css";
import {
    Testimonial,
    testimonials as allTestimonials,
} from "../data/testimonialData";

interface TestimonialsCarouselProps {
    testimonialIds: number[];
    title?: string;
    className?: string;
    visibleCards?: 1 | 2 | 3; // New prop to control the number of cards displayed
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    testimonialIds,
    title,
    className = "",
    visibleCards = 2, // Default to 2 cards for backward compatibility
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    // Get the actual testimonials from IDs
    const testimonials = testimonialIds
        .map((id) => allTestimonials.find((t) => t.id === id))
        .filter((t): t is Testimonial => t !== undefined);

    const cardSpacing = 16; // px
    const cardWidth = 240; // px - fixed width for each card

    // If we have same or fewer testimonials than visible cards, just show them directly
    const shouldLoop = testimonials.length > visibleCards;

    // For infinite looping, create an array with duplicated items at both ends
    // Add items at the beginning and end for a smooth infinite loop
    const wrappedTestimonials = shouldLoop
        ? [
              // Add last items at the beginning for looping back
              ...testimonials.slice(-visibleCards),
              // Original array
              ...testimonials,
              // Add first items at the end for looping forward
              ...testimonials.slice(0, visibleCards),
          ]
        : testimonials;

    // Calculate total number of slides
    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    // Adjust initial position for the loop
    useEffect(() => {
        if (shouldLoop && trackRef.current) {
            // Start at the "real" first slide, which is offset by visibleCards due to the duplicated items
            setCurrentIndex(0);
            // Position at first real item (after the duplicated ones)
            trackRef.current.style.transition = "none";
            updateTrackPosition(0);

            // Re-enable transition
            setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition =
                        "transform 0.5s ease-in-out";
                }
            }, 50);
        }
    }, [shouldLoop, visibleCards]);

    // Function to calculate and update track position
    const updateTrackPosition = (index: number) => {
        if (!trackRef.current) return;

        const offsetPerCard = cardWidth + cardSpacing * 2;

        // For proper infinite loop behavior
        if (shouldLoop) {
            // Calculate the real index in the original array for proper wrapping
            const wrappedIndex =
                index < 0
                    ? testimonials.length + index
                    : index % testimonials.length;

            // Account for the duplicate cards at the beginning (visibleCards cards)
            const baseOffset = visibleCards * offsetPerCard;

            // Position the track to show the correct cards
            // Use the original index for smooth animation between edges
            const translateX = baseOffset + index * offsetPerCard;
            trackRef.current.style.transform = `translateX(-${translateX}px)`;
        } else {
            // Simple positioning for non-looping carousel
            const translateX = index * offsetPerCard;
            trackRef.current.style.transform = `translateX(-${translateX}px)`;
        }
    };

    // Update track position when currentIndex changes
    useEffect(() => {
        updateTrackPosition(currentIndex);
    }, [currentIndex]);

    // Handle loop transition when reaching the cloned slides
    useEffect(() => {
        if (!shouldLoop) return;

        const handleLoopTransition = () => {
            if (currentIndex < 0) {
                // If we go left from the first real slide
                // Jump to the last real slide after animation completes
                const timer = setTimeout(() => {
                    setAnimating(true);
                    if (trackRef.current) {
                        trackRef.current.style.transition = "none";
                    }
                    // Move to the real last slide - the clone we're currently showing
                    const newIndex = testimonials.length - 1;
                    setCurrentIndex(newIndex);

                    // Re-enable transition after the jump
                    setTimeout(() => {
                        if (trackRef.current) {
                            trackRef.current.style.transition =
                                "transform 0.5s ease-in-out";
                        }
                        setAnimating(false);
                    }, 50);
                }, 500); // Wait for the animation to finish before jumping
                return timer;
            } else if (currentIndex >= testimonials.length) {
                // If we go right from the last real slide
                // Jump to the first real slide after animation completes
                const timer = setTimeout(() => {
                    setAnimating(true);
                    if (trackRef.current) {
                        trackRef.current.style.transition = "none";
                    }
                    // Move to the real first slide
                    setCurrentIndex(0);

                    // Re-enable transition after the jump
                    setTimeout(() => {
                        if (trackRef.current) {
                            trackRef.current.style.transition =
                                "transform 0.5s ease-in-out";
                        }
                        setAnimating(false);
                    }, 50);
                }, 500); // Wait for the animation to finish before jumping
                return timer;
            }

            return undefined;
        };

        const timer = handleLoopTransition();
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [currentIndex, testimonials.length, shouldLoop]);

    const goToPrev = () => {
        if (animating || testimonials.length <= 1) return;
        setAnimating(true);

        setCurrentIndex((prevIndex) => prevIndex - 1);
        setTimeout(() => setAnimating(false), 500);
    };

    const goToNext = () => {
        if (animating || testimonials.length <= 1) return;
        setAnimating(true);

        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTimeout(() => setAnimating(false), 500);
    };

    // Calculate which cards should be marked as active (fully visible)
    const getActiveIndices = () => {
        if (!shouldLoop) {
            // For non-looping with fewer items
            return wrappedTestimonials.map(
                (_, i) => i >= currentIndex && i < currentIndex + visibleCards
            );
        }

        // For the looped version with proper wrapping
        return wrappedTestimonials.map((_, i) => {
            // Adjust index to account for the duplicated items at beginning
            const adjustedIndex = i - visibleCards;

            // Calculate the real index in the original array for proper wrapping
            const wrappedIndex =
                adjustedIndex < 0
                    ? testimonials.length + adjustedIndex
                    : adjustedIndex % testimonials.length;

            // Calculate the real current index in the original array
            const wrappedCurrentIndex =
                currentIndex < 0
                    ? testimonials.length + currentIndex
                    : currentIndex % testimonials.length;

            // Now check if this card should be active based on its position within the visible range
            for (let j = 0; j < visibleCards; j++) {
                const activeIndex =
                    (wrappedCurrentIndex + j) % testimonials.length;
                if (wrappedIndex === activeIndex) {
                    return true;
                }
            }
            return false;
        });
    };

    // Apply active status to all cards so they're rendered properly
    const activeIndices = getActiveIndices();

    // Improve the CSS transition to make it smoother
    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
    }, []);

    // Pre-render all cards by making them visible but with opacity and blur effects
    // This will ensure all cards are in the DOM and ready to be shown
    const getCardVisibility = (index: number) => {
        // For multi-card displays or single-card, use a consistent approach
        const isActive = activeIndices[index];

        if (isActive) {
            return "active";
        }

        // For multi-card displays, handle peeking cards
        if (visibleCards > 1) {
            const isPeeking = shouldLoop;

            if (isPeeking) {
                // Peeking only applies to immediate adjacent cards
                const adjustedIndex = index - visibleCards;
                const wrappedIndex =
                    adjustedIndex < 0
                        ? testimonials.length + adjustedIndex
                        : adjustedIndex % testimonials.length;

                const wrappedCurrentIndex =
                    currentIndex < 0
                        ? testimonials.length + currentIndex
                        : currentIndex % testimonials.length;

                // Check if this is immediately before or after the visible range
                const isBefore =
                    wrappedIndex ===
                    (wrappedCurrentIndex - 1 + testimonials.length) %
                        testimonials.length;
                const isAfter =
                    wrappedIndex ===
                    (wrappedCurrentIndex + visibleCards) % testimonials.length;

                if (isBefore || isAfter) {
                    return "peeking";
                }
            }
        }

        return "";
    };

    // Add specific classes for carousel width based on visible cards
    const carouselSizeClass = `cards-${visibleCards}`;

    return (
        <div className={`testimonials-container ${className}`}>
            {title && <h2 className="section-title">{title}</h2>}
            <div className={`testimonials-carousel ${carouselSizeClass}`}>
                <button
                    className="carousel-btn prev-btn"
                    onClick={goToPrev}
                    disabled={animating || testimonials.length <= 1}
                    aria-label="Previous testimonials"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="testimonials-viewport">
                    <div
                        className="testimonials-track"
                        ref={trackRef}
                        style={{
                            paddingLeft:
                                visibleCards === 1
                                    ? `calc(50% - ${
                                          cardWidth / 2
                                      }px - ${cardSpacing}px)`
                                    : `calc(50% - ${
                                          (cardWidth * visibleCards) / 2
                                      }px - ${cardSpacing}px)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {wrappedTestimonials.map((testimonial, index) => (
                            <div
                                className={`testimonial-card ${getCardVisibility(
                                    index
                                )}`}
                                key={`${testimonial.id}-${index}`}
                            >
                                <div className="card-image-container">
                                    <div className="card-image">
                                        {testimonial.imageUrl && (
                                            <img
                                                src={testimonial.imageUrl}
                                                alt={testimonial.title}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">
                                        {testimonial.title}
                                    </h3>
                                    <div className="tech-badges">
                                        {testimonial.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    className="badge"
                                                    key={techIndex}
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <p>{testimonial.quote}</p>
                                    <div className="testimonial-author">
                                        <h4>{testimonial.author.name}</h4>
                                        <p>{testimonial.author.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel-btn next-btn"
                    onClick={goToNext}
                    disabled={animating || testimonials.length <= 1}
                    aria-label="Next testimonials"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <div className="carousel-indicators">
                {testimonials.length > 1 &&
                    Array.from({ length: testimonials.length }, (_, i) => (
                        <button
                            key={i}
                            className={`indicator ${
                                i ===
                                (currentIndex < 0
                                    ? testimonials.length + currentIndex
                                    : currentIndex % testimonials.length)
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
