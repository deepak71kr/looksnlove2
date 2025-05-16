// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import CategoryAccordion from '../components/Services/CategoryAccordion';
import { fetchServicesData } from '../components/Services/servicesData';
import '../components/Services/services.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        console.log('Fetching services...');
        const data = await fetchServicesData();
        console.log('Fetched services:', data);
        setServices(data);
      } catch (err) {
        console.error('Error loading services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return <div className="services-page loading">Loading services...</div>;
  }

  if (error) {
    return <div className="services-page error">{error}</div>;
  }

  console.log('Rendering services:', services);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      {services.length === 0 ? (
        <div className="no-services">No services available at the moment.</div>
      ) : (
        <CategoryAccordion categories={services} />
      )}
    </div>
  );
};

export default ServicesPage;
