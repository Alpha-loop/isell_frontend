'use client'; // This must be a client component

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const protectedRoutes = ['/dashboard', '/profile']; // Add any other routes that require login

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the current path is one of the protected routes
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    // If it's not a protected route, or it's the login/register page,
    // we don't need to block rendering, just set loading to false.
    if (!isProtectedRoute && pathname !== '/login' && pathname !== '/register') {
      setIsAuthenticated(true); // Treat as authenticated for non-protected paths
      setIsLoading(false);
      return;
    }

    const checkAuth = () => {
      const token = localStorage.getItem('userToken'); // Check for the token
      if (token) {
        // Here you could optionally validate the token (e.g., check expiry using jwt-decode)
        // For now, presence is enough for initial UI display
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuth();

    // Optionally set up a mechanism to re-check auth if local storage changes
    // window.addEventListener('storage', checkAuth); // Listen for changes in other tabs
    // return () => window.removeEventListener('storage', checkAuth);
  }, [pathname, router]);

  // Handle redirection based on auth status and loading state
  useEffect(() => {
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (!isLoading) {
      if (isProtectedRoute && !isAuthenticated) {
        // If it's a protected route and not authenticated, redirect to login
        router.replace('/auth/login');
      } else if (!isProtectedRoute && isAuthenticated && (pathname === '/auth/login' || pathname === '/auth/register')) {
        // If authenticated but trying to access login/register, redirect to dashboard
        router.replace('/');
      }
    }
  }, [isLoading, isAuthenticated, pathname, router]);


  if (isLoading) {
    // Show a loading indicator while checking authentication status
    return (
      <html lang="en">
        <body className="flex items-center justify-center min-h-screen">
          <p>Loading application...</p>
        </body>
      </html>
    );
  }

  // If we reach here, either the user is authenticated, or they are on a non-protected route (like login/register)
  // that doesn't require a token, or they are on a protected route but are authenticated.
  return (
    <>
      {children}
    </>
  );
}