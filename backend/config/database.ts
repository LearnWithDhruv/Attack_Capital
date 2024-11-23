import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Test the connection before connecting
    const testConnection = await mongoose.connect(mongoURI);
    
    if (testConnection.connection.readyState === 1) {
      console.log('MongoDB Connected Successfully');
      
      // Log database name and host for verification
      console.log('Connected to database:', testConnection.connection.name);
      console.log('Database host:', testConnection.connection.host);
    } else {
      throw new Error('Failed to establish MongoDB connection');
    }

  } catch (error: any) {
    console.error('MongoDB Connection Error:', error.message);
    if (error.code) {
      console.error('Error Code:', error.code);
    }
    if (error.codeName) {
      console.error('Error CodeName:', error.codeName);
    }
    process.exit(1);
  }
};

// Add process handlers
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});

export default connectDB;