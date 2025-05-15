// backend/controllers/categoryController.js
import ServiceCategory from '../models/service.category.model.js';

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const category = new ServiceCategory({ name: req.body.name, services: [] });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await ServiceCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a service to a category
export const addService = async (req, res) => {
  try {
    const { name, prices } = req.body;
    const category = await ServiceCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.services.push({ name, prices });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a service within a category
export const updateService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { name, prices } = req.body;
    const category = await ServiceCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    const service = category.services.id(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    if (name) service.name = name;
    if (prices) service.prices = prices;

    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a service from a category
export const deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const category = await ServiceCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.services.id(serviceId).remove();
    await category.save();
    res.json({ message: 'Service deleted', category });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    await ServiceCategory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
