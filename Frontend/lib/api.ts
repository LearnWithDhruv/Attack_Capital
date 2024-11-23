import { Post } from '@/types/post';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';


export async function fetchPosts(userId?: string): Promise<Post[]> {
  // Construct URL based on userId
  const url = userId 
    ? `http://localhost:3000/api/posts?userId=${userId}` // Filter by user ID
    : 'http://localhost:3000/api/posts'; // Fetch all posts if no user ID

  const response = await fetch(url, {
    next: { revalidate: 60 }, // Incremental Static Regeneration
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function createPost(postData: Omit<Post, 'id' | 'createdAt'>) {
  const token = localStorage.getItem('token');
  
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(postData)
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
}