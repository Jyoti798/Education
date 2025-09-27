import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content">
              
              {/* Brand and Copyright */}
              <div className="footer-brand">
                <strong className="brand-name">Educate</strong>
                <span className="copyright">© {new Date().getFullYear()}</span>
              </div>
              
              {/* Footer Links */}
              <div className="footer-links">
                <a href="#privacy" className="footer-link">Privacy</a>
                <span className="separator">·</span>
                <a href="#terms" className="footer-link">Terms</a>
                <span className="separator">·</span>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;