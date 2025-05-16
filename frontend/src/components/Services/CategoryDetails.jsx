// src/components/Services/CategoryDetails.jsx
import React from 'react';
import ServiceItem from './ServiceItem';

const CategoryDetails = ({ category }) => (
  <div className="category-details">
    <div className="category-header">
      <h2>{category.category}</h2>
      <img 
        src={category.image} 
        alt={category.category} 
        className="category-image" 
      />
    </div>
    <div className="services-list">
      {category.subcategories.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  </div>
);

export default CategoryDetails;
