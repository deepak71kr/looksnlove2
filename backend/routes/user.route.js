import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { sendPasswordEmail } from '../utils/emailSender.js';

const router = express.Router();

// Helper for error responses
const errorResponse = (res, status, message) => {
  return res.status(status).json({ 
    success: false, 
    error: message 
  });
};

// Check Authentication Route
router.get('/check-auth', async (req, res) => {
  try {
    const token = req.cookies.access_token;
    
    if (!token) {
      return errorResponse(res, 401, 'Not authenticated');
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return errorResponse(res, 401, 'User not found');
    }

    res.json({ 
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error('Auth check error:', error);
    errorResponse(res, 401, 'Invalid token');
  }
});

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    
    // Validate input
    if (!name || !email || !password || !phone) {
      return errorResponse(res, 400, 'All fields are required');
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 409, 'Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save user
    const newUser = new User({ 
      name, 
      email, 
      password: hashedPassword,
      originalPassword: password, // Store original password
      phone 
    });
    await newUser.save();

    res.status(201).json({ 
      success: true,
      message: 'Account created successfully' 
    });

  } catch (error) {
    console.error('Signup error:', error);
    errorResponse(res, 500, 'Internal server error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set secure cookie
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
      sameSite: 'strict'
    });

    res.json({ 
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    errorResponse(res, 500, 'Internal server error');
  }
});

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return errorResponse(res, 400, 'Email is required');
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, 404, 'Email not registered');
    }

    try {
      // If original password is not available, generate a new one
      let passwordToSend = user.originalPassword;
      if (!passwordToSend) {
        // Generate a new password
        const newPassword = Math.random().toString(36).slice(-8);
        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        // Update user's password
        user.password = hashedPassword;
        user.originalPassword = newPassword;
        await user.save();
        passwordToSend = newPassword;
      }

      // Send account details email
      await sendPasswordEmail(user.email, passwordToSend, user.phone);
      
      res.json({ 
        success: true,
        message: 'Account details have been sent to your email'
      });
    } catch (emailError) {
      console.error('Error sending account details email:', emailError);
      return errorResponse(res, 500, 'Failed to send account details. Please try again later.');
    }

  } catch (error) {
    console.error('Forgot password error:', error);
    errorResponse(res, 500, 'Failed to process request');
  }
});

// Reset Password Route
router.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user with valid token
    const user = await User.findOne({
      email: decoded.email,
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return errorResponse(res, 400, 'Invalid or expired token');
    }

    // Update password
    user.password = await bcrypt.hash(newPassword, 12);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ 
      success: true,
      message: 'Password reset successful' 
    });

  } catch (error) {
    console.error('Reset password error:', error);
    errorResponse(res, 500, 'Password reset failed');
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  res.json({ success: true, message: 'Logged out successfully' });
});

export default router;
