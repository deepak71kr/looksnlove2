// src/components/Services/servicesData.js
import api from '../../api/api';

// Image mapping for existing categories
const categoryImages = {
  'Waxing': 'combo-image.jpeg',
  'Facials': 'facial-category.jpg',
  'Haircut': 'haircut-category.jpg',
  'Manicure': 'manicure-category.jpg',
  'Pedicure': 'pedicure-category.jpg',
  'Massage': 'massage-category.jpg',
  'Hair Color': 'hair-color-category.jpg',
  'Hair Treatment': 'hair-treatment-category.jpg',
  'Makeup': 'makeup-category.jpg',
  'Threading': 'threading-category.jpg'
};

export const fetchServicesData = async () => {
  try {
    console.log('Making API request to /categories');
    const response = await api.get('/categories');
    console.log('API Response:', response.data);
    
    if (!response.data || !Array.isArray(response.data)) {
      console.error('Invalid response format:', response.data);
      return [];
    }

    const categories = response.data;
    console.log('Processing categories:', categories);

    return categories.map(category => ({
      category: category.name,
      image: categoryImages[category.name] || 'combo-image.jpeg', // Use combo-image.jpeg for new categories
      subcategories: category.services.map(service => ({
        name: service.name,
        prices: [service.prices.Normal].filter(price => price !== undefined)
      }))
    }));
  } catch (error) {
    console.error('Error fetching services data:', error.response || error);
    throw error; // Re-throw to handle in the component
  }
};

// Export a default empty array that will be populated when data is fetched
export const servicesData = [];
