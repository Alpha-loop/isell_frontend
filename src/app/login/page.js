'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

// Import the authService
import { login } from '../../api/authService'; // Adjust the path based on your project structure

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold API errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading indicator
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();
    setError(''); // Clear previous errors
    
    // Frontend validation
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setIsSubmitting(true); // Set loading state to true

    try {
      // Call the login method from authService
      const data = await login({ email, password });
      
      console.log('Login successful:', data);
      if (data) {
        localStorage.setItem('userToken', data.token);
      } else {
        console.warn('Login response did not contain a token. Check backend response structure.');
      }

      router.push('/'); 

    } catch (err) {
      console.error('Login error:', err);
      // Extract error message from backend response
      const apiErrorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(apiErrorMessage);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  const btnStyles = {
    background: '#03E418',
    fontWeight: 'bold'
  }

  const lightBg = {
    background: '#D3FFCD',
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 flex overflow-hidden">
        <div className="md:w-1/2 md:h-screen bg-white md:px-10">
            <div className="bg-white p-8 md:w-150 md:mt-20">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Login to your account</h1>
                <p className="text-black font-normal mb-6">
                    Ship globally from Nigeria, effortlessly. Log in to iselllogistics<br/> and connect to over 750 countries.
                </p>

                {error && ( // Display API errors here
                    <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 mt-10">
                    <div>
                    <label htmlFor="email" className="block text-24 font-normal text-black">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 border ${error && !email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-13`}
                        placeholder="youremail@gmail.com"
                        style={lightBg}
                    />
                    {/* The !email check below is a bit redundant if you have a single error message for both fields */}
                    {/* {!email && <p className="mt-1 text-sm text-red-600">{!email}</p>} */}
                    </div>

                    <div className="mt-8">
                        <label htmlFor="password" className="block text-24 font-normal text-black">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 border ${error && !password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13`}
                        placeholder="••••••••"
                        style={lightBg}
                        />
                        {/* {!password && <p className="mt-1 text-sm text-red-600">{!password}</p>} */}
                        <Link href="/forgetPassword" className="font-normal text-black hover:text-blue-500 float-right">
                            Forget password?
                        </Link>
                    </div>

                    <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className="w-full h-13 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[ #03E418] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed items-center mt-15"
                    style={btnStyles}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'} {/* Change button text based on loading state */}
                        {/* Removed <Link> inside <button> - this is generally not good practice for form submission buttons */}
                    </button>
                </form>

                <div className="mt-10 text-center text-24 text-black">
                    Don't have an account?{' '}
                    <Link href="/register" className="font-bold text-black hover:text-blue-500 underline">
                    Signup here
                    </Link>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 h-[100vh] bg-green-300 relative overflow-hidden">
            <Image
                src="/images/authImg.png"
                alt="Sample Image"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={85}
                fill
            />
        </div>
    </main>
  );
}