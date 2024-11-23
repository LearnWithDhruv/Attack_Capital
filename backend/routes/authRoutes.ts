import express from 'express';
const { signup, login } = require('./controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
