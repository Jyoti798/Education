

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    // Handle navigation logic here
    console.log('Navigate to:', href);
    setIsNavOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="logo-icon"></span>
          Educate
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNav}
          aria-controls="navbarNav" 
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#programs"
                onClick={(e) => handleNavClick(e, 'programs')}
              >
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#courses"
                onClick={(e) => handleNavClick(e, 'courses')}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#admissions"
                onClick={(e) => handleNavClick(e, 'admissions')}
              >
                Admissions
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#testimonial"
                onClick={(e) => handleNavClick(e, 'testimonial')}
              >
                Testimonial
              </a>
            </li>
          </ul>
          
          <div className="d-flex gap-2">
            <button 
              className="btn btn-outline-secondary btn-sm px-3"
              onClick={() => console.log('Login clicked')}
            >
              log in
            </button>
            <button 
              className="btn btn-success btn-sm px-3"
              onClick={() => console.log('Registration clicked')}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;