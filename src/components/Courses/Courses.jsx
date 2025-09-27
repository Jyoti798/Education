// import React from 'react'


// export default function Courses(){
// return (
// <div className="row g-4">
// <div className="col-md-6">
// <div className="card border-0">
// <div className="course-card">
// <img src="/images/courses1.jpg" alt="course1" className="w-100" />
// </div>
// <div className="card-body px-0">
// <h5>Native Mac Apps in Swift</h5>
// <p className="text-muted">Take your dev skills to the next level with this ground-up tutorial on native Mac apps</p>
// <div className="d-flex align-items-center gap-2">
// <img src="/images/testimonial.jpeg" alt="author" style={{width:34, height:34, borderRadius:20}} />
// <small className="text-muted">by Annabelle Portar</small>
// <small className="ms-3 badge bg-light text-dark">3 Lesson</small>
// </div>
// </div>
// </div>
// </div>


// <div className="col-md-6">
// <div className="card border-0">
// <div className="course-card">
// <img src="/images/courses2.jpg" alt="course2" className="w-100" />
// </div>
// <div className="card-body px-0">
// <h5>Fundamentals of Interior Design</h5>
// <p className="text-muted">A beginner's guide to designing or renovating breathtaking interior spaces that pop</p>
// <div className="d-flex align-items-center gap-2">
// <img src="/images/testimonial.jpeg" alt="author" style={{width:34, height:34, borderRadius:20}} />
// <small className="text-muted">by Annabelle Portar</small>
// <small className="ms-3 badge bg-light text-dark">3 Lesson</small>
// </div>
// </div>
// </div>
// </div>
// </div>
// )
// }

import React from 'react';
import './Courses.css';

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center courses-header">
            <h2 className="courses-title">
              New Courses
            </h2>
            <button className="btn explore-btn">
              EXPLORE COURSES
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {/* Course 1 - Native Mac Apps */}
          <div className="col-lg-6">
            <div className="card course-card">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Native Mac Apps in Swift" 
                  className="course-image"
                />
                {/* Course Tags */}
                <div className="position-absolute course-tags">
                  <span className=" tag-category">
                    Software
                  </span>
                </div>
                <div className="position-absolute course-price">
                  <span className=" tag-price">
                    $ 79.00 USD
                  </span>
                </div>
              </div>
              
              <div className="card-body course-content">
                <h5 className="card-title course-title">
                  Native Mac Apps in Swift
                </h5>
                <p className="card-text course-description">
                  Take your dev skills to the next level with this ground-up tutorial on native Mac apps
                </p>
                
                <div className="course-meta">
                  <img 
                    src="./images/courses1.jpg" 
                    alt="Annabelle Portar" 
                    className="author-avatar"
                  />
                  <span className="author-name">
                    by Annabelle Portar
                  </span>
                  <span className="lesson-count">
                    <svg className="lesson-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="currentColor"/>
                    </svg>
                    3 Lesson
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Course 2 - Interior Design */}
          <div className="col-lg-6">
            <div className="card course-card">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fundamentals of Interior Design" 
                  className="course-image"
                />
                {/* Course Tags */}
                <div className="position-absolute course-tags">
                  <span className=" tag-category">
                    Art & Design
                  </span>
                </div>
                <div className="position-absolute course-price">
                  <span className=" tag-price">
                    Free
                  </span>
                </div>
              </div>
              
              <div className="card-body course-content">
                <h5 className="card-title course-title">
                  Fundamentals of Interior Design
                </h5>
                <p className="card-text course-description">
                  A beginner's guide to designing or renovating breathtaking interior spaces that pop
                </p>
                
                <div className="course-meta">
                  <img 
                    src="./images/courses2.jpg" 
                    alt="Annabelle Portar" 
                    className="author-avatar"
                  />
                  <span className="author-name">
                    by Annabelle Portar
                  </span>
                  <span className="lesson-count">
                    <svg className="lesson-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="currentColor"/>
                    </svg>
                    3 Lesson
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}