import { CreatePostForm } from '@/components/blog/CreatePostForm';
import { fetchPosts } from '@/lib/api';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { BlogPostCard } from '@/components/blog/BlogPostCard';

export default async function DashboardPage() {
  const userPosts = await fetchPosts();

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl mb-6">Your Dashboard</h1>
        <CreatePostForm />
        
        <section className="mt-10">
          <h2 className="text-xl mb-4">Your Posts</h2>
          {userPosts.length === 0 ? (
            <p>You haven&apos;t published any posts yet.</p>
          ) : (
            userPosts.map(post => (
              <BlogPostCard key={post._id} post={post} />
            ))
          )}
        </section>
      </div>
    </ProtectedRoute>
  );
}
