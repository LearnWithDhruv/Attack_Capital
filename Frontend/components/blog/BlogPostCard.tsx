import React from 'react';
import { Post } from '@/types/post';
import Link from 'next/link'; // Import Link for navigation

interface BlogPostCardProps {
  post: Post;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="blog-post-card">
      <h2>{post.title}</h2>
      <p>{post.content.slice(0, 200)}...</p>
      <small>
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </small>
      <br />
      <Link href={`/posts/${post._id}`}>
        <a className="read-more-link">Read More</a>
      </Link>
    </div>
  );
};
