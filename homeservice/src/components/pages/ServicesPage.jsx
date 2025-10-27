import React from 'react';
import Header from '../header.jsx';
import CartList from '../customer/cusCartList.jsx';

const ServicesPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="container py-5">
        <h1 className="display-4 mb-4">Our Services</h1>
        <CartList cardLimit={12} />
      </div>
    </div>
  );
};

export default ServicesPage;
