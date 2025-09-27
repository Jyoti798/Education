import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="educate-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="educate-container">
              {/* Main Title */}
              <h2 className="main-title">How does Educate work?</h2>
              
              {/* Steps Container */}
              <div className="steps-container">
                <div className="row align-items-center justify-content-center">
                  
                  {/* Step 1 */}
                  <div className="col-12 col-md-4 col-lg-3">
                    <div className="step-item text-center">
                      <div className="step-circle">
                        <span>1</span>
                      </div>
                      <p className="step-text">
                        Browse course from our<br />
                        expert contributor
                      </p>
                    </div>
                  </div>
                  
                  {/* Dotted Line 1 */}
                  <div className="col-md-1 d-none d-md-block">
                    <div className="dotted-connector"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="col-12 col-md-4 col-lg-3">
                    <div className="step-item text-center">
                      <div className="step-circle">
                        <span>2</span>
                      </div>
                      <p className="step-text">
                        Purchase quickly and<br />
                        securely
                      </p>
                    </div>
                  </div>
                  
                  {/* Dotted Line 2 */}
                  <div className="col-md-1 d-none d-md-block">
                    <div className="dotted-connector"></div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="col-12 col-md-4 col-lg-3">
                    <div className="step-item text-center">
                      <div className="step-circle">
                        <span>3</span>
                      </div>
                      <p className="step-text">
                        That's Start learning right<br />
                        away
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="bottom-section text-center">
                <p className="satisfied-learners">
                  Join over 1,000 satisfied learners today.
                </p>
                <button className="btn explore-btn">
                  Explore courses
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;