'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
    // Backend integration will go here later
  };

  const lightBg = {
    background: '#D3FFCD',
  }

  const btnStyles = {
    background: '#03E418',
    fontWeight: 'bold'
  }

  return (
    <div className="min-h-screen py-40 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-semibold text-black">
          Forgot Password
        </h2>
        <p className="mt-4 font-normal text-sm text-black leading-[1.5]">
          To reset your password, please enter your account's email address. We'll send instructions to that inbox.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 sm:rounded-lg">
          {isSubmitted ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">
                Instructions Sent
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                If an account exists for {email}, you'll receive an email with password reset instructions shortly.
              </p>
              <div className="mt-6">
                <Link
                  href="/login"
                  className="text-sm font-medium text-green-600 hover:text-green-500"
                >
                  Back to login
                </Link>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 border ${!email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-13`}
                        placeholder="youremail@gmail.com"
                        style={lightBg}
                    />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full h-13 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[ #03E418] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed items-center mt-8"
                    style={btnStyles}
                >
                  Proceed
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center text-sm">
            <p className="text-gray-600">
              New to iselllogistics?{' '}
              <Link href="/register" className="font-medium text-black hover:text-green-500 underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}