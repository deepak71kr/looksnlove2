// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import categoryRoutes from './routes/category.route.js';
import contactRoutes from './routes/contact.route.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", // Removed trailing slash
  credentials: true // Allow cookies
}));
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

