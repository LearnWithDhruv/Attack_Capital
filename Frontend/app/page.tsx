import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { Post } from '@/types/post';

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        Latest Blog Posts
      </h1>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">
          No posts found. Check back later!
        </p>
      )}
    </div>
  );
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL not configured');
    }
    
    console.log('Base URL:', baseUrl)

    const response = await fetch(`${baseUrl}/api/posts`, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.log('Error Details:', errorData);
      throw new Error(errorData.message || 'Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array instead of throwing to prevent page crash
  }
}
