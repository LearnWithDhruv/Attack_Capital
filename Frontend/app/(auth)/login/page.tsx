import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-6 text-center">Login</h1>
      <LoginForm />
      <p className="text-center mt-4">
         Don&apos;t have an account? 
        <Link href="/signup" className="text-blue-600 ml-2">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
