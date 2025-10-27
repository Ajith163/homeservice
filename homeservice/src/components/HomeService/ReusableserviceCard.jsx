import React from "react";

const ServiceCard = ({ title, imageUrl, borderColor = "#007bff" }) => {
  return (
    <div 
      className="card shadow-sm overflow-hidden rounded-3 p-0" 
      style={{ 
        cursor: 'pointer',
        height: '280px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: `5px solid ${borderColor}`}}
    >
      <div
        className="text-white fw-bold text-center d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: borderColor,
          fontSize: '0.9rem',
          minHeight: '50px',
          padding: '10px',
          flexShrink: 0,
        }}
      >
        {title}
      </div>
      
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flex: '1',
          minHeight: 0,
          width: '100%',
        }}
      >
      </div>
    </div>
  );
};

export default ServiceCard;
