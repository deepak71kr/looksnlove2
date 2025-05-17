import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },    // Delivery date
  time: { type: String, required: true },  // Delivery time slot
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
