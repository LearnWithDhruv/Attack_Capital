import { User } from '@/types/user';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export async function loginUser(email: string, password: string): Promise<{ user: User, token: string }> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

export async function signupUser(email: string, password: string): Promise<{ user: User, token: string }> {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  return response.json();
}

export async function validateToken(token: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/validate-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Token validation failed');
  }

  return response.json();
}