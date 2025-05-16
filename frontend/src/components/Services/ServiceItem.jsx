// src/components/Services/ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ service }) => (
  <div className="service-item">
    <span className="service-name">{service.name}</span>
    <div className="price-buttons">
      {service.prices.map((price, index) => (
        <button key={index} className="price-btn">
          <span className="inr">₹</span>
          {price}
          <span className="add-icon">+</span>
        </button>
      ))}
    </div>
  </div>
);

export default ServiceItem;
