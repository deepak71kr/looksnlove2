import express from 'express';
import Contact from '../models/contact.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, phone, message, date, time } = req.body;
    // Log for debugging
    console.log("Received body:", req.body);

    if (!name || !phone || !message || !date || !time) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Contact({
      name,
      phone,
      message,
      date,
      time,
    });

    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

export default router;
