import React from "react";

const ReusableCard = ({ title, imageUrl, rating, originalPrice, currentPrice }) => {
  const fallbackImage = 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170';
  
  return (
    <div className="service-card">
      <div className="service-image">
        <img 
          src={imageUrl || fallbackImage} 
          alt={title} 
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <span className="service-rating sahadow-sm border  col-3 rounded-pill">
          <span className=" ms-2 mb-1 star-icon">★</span>
          <span className="rating-value">{rating || '4.8'}</span>
        </span>
        <div className="service-pricing">
          <span className="starts-at text-start">Starts at</span>
          <div className="price-container">
            <span className="original-price">₹{originalPrice || '650'}</span>
            <span className="current-price">₹{currentPrice || '550'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
