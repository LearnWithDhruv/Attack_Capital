'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const pathname = usePathname(); // Get the current path

  const getLinkClass = (path: string) => 
    `hover:underline ${pathname === path ? 'font-bold border-b-2 border-white' : ''}`;

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Blog Platform
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          {user ? (
            <>
              <Link href="/dashboard" className={getLinkClass('/dashboard')}>
                Dashboard
              </Link>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={getLinkClass('/login')}>
                Login
              </Link>
              <Link href="/signup" className={getLinkClass('/signup')}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
