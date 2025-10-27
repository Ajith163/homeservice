import React from 'react';
import Header from '../header.jsx';

const ContactPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="container py-5">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">Get in touch with us.</p>
      </div>
    </div>
  );
};

export default ContactPage;
