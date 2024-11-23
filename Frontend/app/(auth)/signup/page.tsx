import { SignupForm } from '@/components/auth/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-6 text-center">Create an Account</h1>
      <SignupForm />
      <p className="text-center mt-4">
        Already have an account? 
        <Link href="/login" className="text-blue-600 ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
