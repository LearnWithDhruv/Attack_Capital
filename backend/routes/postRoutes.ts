import express from 'express';
import { createPost, getPosts } from '../controllers/postController';
const {authMiddleware} = require('./middleware/authMiddleware')

const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);

export default router;
