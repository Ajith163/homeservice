import React from 'react';
import Header from '../header.jsx';

const AboutPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="container py-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Welcome to our home services platform.</p>
      </div>
    </div>
  );
};

export default AboutPage;
