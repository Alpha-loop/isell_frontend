// src/api/axiosInstance.js
import axios from 'axios';

// Get your backend API base URL from environment variables
// For React, it's typically process.env.REACT_APP_API_BASE_URL
// For Next.js, process.env.NEXT_PUBLIC_API_BASE_URL
const API_BASE_URL = 'https://isell-backend.vercel.app/api'; // Fallback for dev


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Add authorization token to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('userToken'); // <--- It tries to get the token here

        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // <--- And adds it here
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor (Optional, but highly recommended for global error handling)
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {
            switch (error.response.status) {
                case 401: // Unauthorized (e.g., token expired or invalid)
                    console.error('Unauthorized: Please log in again.');
                    // Optionally: Redirect to login page or clear token
                    localStorage.removeItem('userToken');
                    window.location.href = '/login'; // Example: Redirect to login
                    break;
                case 403: // Forbidden (e.g., user doesn't have permission)
                    console.error('Forbidden: You do not have permission to access this resource.');
                    // Optionally: Show a generic error message to the user
                    break;
                case 404: // Not Found
                    console.error('Resource not found.');
                    break;
                case 500: // Server Error
                    console.error('Server error: Something went wrong on the server.');
                    break;
                default:
                    console.error(`API Error: ${error.response.status} - ${error.response.data.message || error.message}`);
            }
        } else if (error.request) {
            // The request was made but no response was received (e.g., network error)
            console.error('Network Error: No response received from server.');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Request Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;