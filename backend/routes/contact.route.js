import express from 'express';
import Contact from '../models/contact.model.js';

const router = express.Router();

// POST: Save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    const contact = new Contact({ name, phone, message });
    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// GET: Fetch all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
