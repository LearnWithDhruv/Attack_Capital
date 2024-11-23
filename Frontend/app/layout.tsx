import React from 'react';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/common/Header';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Blog Platform',
  description: 'Share your thoughts and stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-gray-100 py-4 text-center">
              © {new Date().getFullYear()} Personal Blog Platform
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}