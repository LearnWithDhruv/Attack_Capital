import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT = 3000,
  MONGODB_URI = 'mongodb+srv://Dhruv_Khatter03:Dhruv@9817812811@attack.1ulqi.mongodb.net/?retryWrites=true&w=majority&appName=Attack',
  JWT_SECRET = '247e3c4648052ffffad8432c9038123dcd8ec64962b940f11151a37c6f55017e40c1b219eb594a25a7126ced7092a29fbcf808a70bf01efa770e78f1503d9301',
  JWT_EXPIRATION = '1h'
} = process.env;