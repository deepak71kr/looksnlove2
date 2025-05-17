import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  service: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
  },
  quantity: { type: Number, default: 1 },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  total: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update total before saving
cartSchema.pre('save', function(next) {
  this.total = this.items.reduce((sum, item) => sum + (item.service.price * item.quantity), 0);
  this.updatedAt = new Date();
  next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart; 