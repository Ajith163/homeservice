import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <h1 className="display-4 fw-bold text-dark mb-4 lh-1">
              Home Experts at
              <br />
              Your <span className="text-primary">🏠</span> Door
            </h1>
            
            <p className="lead text-dark mb-0 fs-5 lh-base">
              Expert home services, delivered to your doorstep - get reliable handyman solution with ease. Fast, professional, and tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
