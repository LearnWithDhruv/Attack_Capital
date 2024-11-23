import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
  try {
    console.log('Signup Request Body:', req.body);
    const { email, password } = req.body;

    // Check if user already exists
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists' 
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    // Create new user
    const user = new User({ email, passwordHash});
    await user.save();

    // Generate token
    const token = generateToken(user);
    console.log('Generated Token:', token);

    res.status(201).json({ 
      user: { 
        id: user._id, 
        email: user.email 
      }, 
      token 
    });
  } catch (error) {
    console.log('Full Signup Error:', error);
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user);

    res.json({ 
      user: { 
        id: user._id, 
        email: user.email 
      }, 
      token 
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};