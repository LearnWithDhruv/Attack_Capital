'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect if not authenticated
    } else {
      setIsLoading(false); // Stop loading when user is authenticated
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
