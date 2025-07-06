'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only validation for now
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Login attempt with:', { email, password });
    // Backend integration will go here later
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

                <form onSubmit={handleSubmit} className="space-y-4 mt-10">
                    <div>
                    <label htmlFor="email" className="block text-24 font-normal text-black">Email</label>
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
                    {!email && <p className="mt-1 text-sm text-red-600">{!email}</p>}
                    </div>

                    <div className="mt-8">
                        <label htmlFor="password" className="block text-24 font-normal text-black">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 border ${!password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13`}
                        placeholder="••••••••"
                        style={lightBg}
                        />
                        {!password && <p className="mt-1 text-sm text-red-600">{!password}</p>}
                        <Link href="/forgetPassword" className="font-normal text-black hover:text-blue-500 float-right">
                            Forget password?
                        </Link>
                    </div>

                    {/* <div className="flex items-center mt-8">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="h-8 w-8 text-blue-600 focus:ring-blue-500 rounded ring-green-300"
                        required
                    />
                    <label htmlFor="terms" className="ml-2 block text-14 text-gray-700">
                        By Creating an Account you agree with our <a href="#" className="text-black font-bold">Terms and <br/>Conditions & Privacy Policy</a>
                    </label>
                    </div> */}

                    <button
                    type="submit"
                    className="w-full h-13 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[ #03E418] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed items-center mt-15"
                    style={btnStyles}
                    >
                        <Link href="/login" className="font-bold text-black hover:text-blue-500 underline">
                            Login
                        </Link>
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
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Log in to your account
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600 max-w">
    //       Ship globally from Nigeria, effortlessly. Log in to Selllogistics and connect to over 750 countries.
    //     </p>
    //   </div>

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6" onSubmit={handleSubmit}>
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //             Email
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               placeholder="youremail@gmail.com"
    //               required
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //             Password
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               placeholder="***********"
    //               required
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div className="flex items-center justify-end">
    //           <div className="text-sm">
    //             <Link href="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
    //               Forgot Password?
    //             </Link>
    //           </div>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    //           >
    //             Login
    //           </button>
    //         </div>
    //       </form>

    //       <div className="mt-6 text-center text-sm">
    //         <p className="text-gray-600">
    //           New to Selllogistics?{' '}
    //           <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
    //             Register here
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}