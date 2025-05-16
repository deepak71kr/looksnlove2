// src/pages/ServicesPage.jsx
import React from 'react';
import CategoryAccordion from '../components/Services/CategoryAccordion';
import { servicesData } from '../components/Services/servicesData';
import '../components/Services/services.css';

const ServicesPage = () => (
  <div className="services-page">
    <h1>Our Services</h1>
    <CategoryAccordion categories={servicesData} />
  </div>
);

export default ServicesPage;
