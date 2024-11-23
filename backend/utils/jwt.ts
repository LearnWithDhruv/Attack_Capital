import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION } from '../config/environment';
import { IUser } from '../models/User';

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email 
    }, 
    JWT_SECRET, 
    { expiresIn: JWT_EXPIRATION }
  );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};