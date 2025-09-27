
import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { useData } from "../../context/DataContext";

export default function Testimonials() {
  const { testimonials, loading } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialImage = "./images/testmonial.jpg";

  // Carousel logic
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const renderStars = (rating) => {
    const numericRating = parseFloat(rating) || 0;
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i + 1 <= numericRating ? "filled" : "empty"}`}
      >
        {i + 1 <= numericRating ? "★" : "☆"}
      </span>
    ));
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center">
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">What Our Student Says</h2>
          <div className="testimonial-container">
            {/* Left Image Section */}
            <div className="testimonial-image-wrapper">
              <div className="testimonial-bg-shape"></div>
              <div className="testimonial-image-card">
                <img
                  src={testimonialImage}
                  alt="Student"
                  className="testimonial-avatar"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="testimonial-content">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                How much will it cost the target audience is makes and females
                aged zero and up, for I'll pay you in a week we don't need to
                pay upfront...
              </p>
              <div className="testimonial-rating">{renderStars(5)}</div>
              <div className="testimonial-author">Dianne Russell</div>
              <div className="testimonial-location">Poland</div>

              <div className="testimonial-dots">
                <button className="dot active"></button>
                <button className="dot inactive"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What Our Student Says</h2>

        <div className="testimonial-container">
          {/* Left Image Section */}
          <div className="testimonial-image-wrapper">
            <div className="testimonial-bg-shape"></div>
            <div className="testimonial-image-card">
              <img
                src={testimonialImage}
                alt="Student"
                className="testimonial-avatar"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="testimonial-content">
            <span className="quote-mark">"</span>

            <p className="testimonial-text">
              {current.comment ||
                "Amazing experience with this platform. The courses are well-structured and the instructors are very knowledgeable."}
            </p>

            <div className="testimonial-rating">
              {renderStars(current.rating)}
            </div>

            <div className="testimonial-author">
              {current.comment_by || "Anonymous Student"}
            </div>
            <div className="testimonial-location">
              {current.location || "Student"}
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`dot ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
