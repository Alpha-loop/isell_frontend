'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function registerUser(formData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      return { error: data.message || 'Registration failed' };
    }

    // Set cookies
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return data;
  } catch (error) {
    return { error: error.message };
  }
}