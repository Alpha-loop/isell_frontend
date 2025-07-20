'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// Import the authService we created
import { register } from '../../api/authService'; // Adjust the path based on your project structure

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Include at least one uppercase letter';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    if (!formData.firstName.trim()) { // Added trim to ensure it's not just whitespace
      newErrors.firstName = 'First name required';
    }
    // You might want to add validation for lastName too if it's required by your backend
    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = 'Last name required';
    // }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({}); // Clear API errors before new submission

    try {
      // Call the register method from authService
      // Your backend's registerUser endpoint expects:
      // { email, firstName, lastName, password }
      const response = await register({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      
      // Assuming successful registration doesn't return an 'error' property
      // but rather a success message or redirects
      console.log('Registration successful:', response);
      // You might want to show a success message before redirecting
      // or redirect directly based on your UX flow.
      router.push('/dashboard'); // Or '/login' if you want them to log in after registering
      
    } catch (error) {
      console.error('Registration failed:', error);
      // The axiosInstance.interceptors.response.use handles common HTTP errors.
      // For specific backend validation errors, your backend should send
      // a structured error response (e.g., { message: 'Email already exists' })
      const apiErrorMessage = error.response?.data?.message || 'Something went wrong. Please try again.';
      setErrors({ api: apiErrorMessage });
    } finally {
      setIsSubmitting(false);
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
    <div className="bg-white p-8 md:w-150 md:mt-20">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Register Free Account</h1>
      <p className="text-black font-normal mb-6">
        Ready to ship worldwide? Register account for seamless<br/> delivery from Nigeria to over 300 countries.
      </p>

      {errors.api && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {errors.api}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-10">
        <div>
          <label htmlFor="email" className="block text-24 font-normal text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-13`}
            placeholder="youremail@gmail.com"
            style={lightBg}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <label htmlFor="firstName" className="block text-24 font-normal text-black">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13`}
              placeholder="Sam"
              style={lightBg}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-24 font-normal text-black">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13"
              placeholder="Robin"
              style={lightBg}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <label htmlFor="password" className="block text-24 font-normal text-black">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13`}
              placeholder="••••••••"
              style={lightBg}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-24 font-normal text-black">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[ #D3FFCD] h-13`}
              placeholder="••••••••"
              style={lightBg}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div className="flex items-center mt-8">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="h-8 w-8 text-blue-600 focus:ring-blue-500 rounded ring-green-300"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-14 text-gray-700">
            By Creating an Account you agree with our <Link href="/conditions" className="font-bold text-black hover:text-blue-500">Terms and Conditions & Privacy Policy</Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-13 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[ #03E418] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed items-center"
          style={btnStyles}
        >
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </button>
      </form>

      <div className="mt-10 text-center text-24 text-black">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-black hover:text-blue-500 underline">
          Login here
        </Link>
      </div>
    </div>
  );
}