import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true, unique: true },
  password:{ type: String, required: true },
  originalPassword: { type: String },
  phone:   { type: String, required: true },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;
