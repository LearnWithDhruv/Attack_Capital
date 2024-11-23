// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  // Public routes
  const publicPaths = ['/login', '/signup', '/'];

  // Check if the path requires authentication
  const isProtectedRoute = ['/dashboard'].includes(pathname);

  if (isProtectedRoute && !token) {
    // Redirect to login if trying to access protected route without token
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (publicPaths.includes(pathname) && token) {
    // Redirect authenticated users away from login/signup
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/login', '/signup', '/']
};