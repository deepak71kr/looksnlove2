// src/components/Services/CategoryAccordion.jsx
import React, { useState } from 'react';
import CategoryDetails from './CategoryDetails';

const CategoryAccordion = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-container">
      {categories.map((category, index) => (
        <div key={category.category} className="accordion-item">
          <div 
            className="accordion-header" 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3>{category.category}</h3>
          </div>
          {openIndex === index && (
            <CategoryDetails category={category} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordion;
