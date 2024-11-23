import express, { Request, Response } from 'express';
import { Post } from '../models/Post';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;
    const post = new Post({
      title,
      content,
      author
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error });
  }
});

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const authorId = req.user!._id;

    const post = new Post({ 
      title, 
      content, 
      authorId 
    });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Post creation failed', error });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { author } = req.query;

    const filter = author 
      ? { authorId: author } 
      : {};

    const posts = await Post.find(filter)
      .populate('authorId', 'email')
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve posts', error });
  }
};

export default router;