import mongoose, { Document, Schema } from 'mongoose';
import { hashPassword, comparePassword } from '../utils/passwordHash';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, { 
  timestamps: true 
});

UserSchema.pre<IUser>('save', async function(next) {
  if (this.isModified('passwordHash')) {
    this.passwordHash = await hashPassword(this.passwordHash);
  }
  next();
});

UserSchema.methods.comparePassword = async function(candidatePassword: string) {
  return bcrypt.comparePassword(candidatePassword, this.passwordHash);
};

export const User = mongoose.model<IUser>('User', UserSchema);