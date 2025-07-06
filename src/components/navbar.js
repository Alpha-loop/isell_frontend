'use client'; // This directive is necessary for client components

import React from 'react';
import { useState } from 'react';
// Removed Next.js specific imports as they are not resolved in this environment
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// --- Your Actual NavBar Component ---
export default function NavBar({ activePage, setActivePage }) {
  // usePathname is removed as it's Next.js specific. Active link highlighting will be static.
  // const pathname = usePathname();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard', // Changed to anchor for demonstration
      icon: '/images/SquaresFour (1).jpg' // Placeholder for icon
    },
    {
      name: 'Shipment',
      path: '/shipment',
      icon: '/images/Truck.jpg' // Placeholder for icon
    },
    {
      name: 'Our Services',
      path: '/services',
      icon: '/images/Cube.jpg' // Placeholder for icon
    },
    {
      name: 'Notification',
      path: '/notification',
      icon: '/images/BellRinging.jpg' // Placeholder for icon
    },
    {
      name: 'Wallet',
      path: '#wallet',
      icon: '/images/Wallet.jpg' // Placeholder for icon
    },
    {
      name: 'Addresses',
      path: '#addresses',
      icon: '/images/MapPinLine.jpg' // Placeholder for icon
    },
  ];

  const btnColor = {
    color: '#F50E0E',
  }

  return (
    <div className="w-80 bg-white shadow-md px-10 py-6 h-screen fixed z-50">
      {/* Logo */}
      <div className="block mb-8 h-20 w-40 relative mt-3">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setActivePage('dashboard');
        }}>
            <img
                src="/images/New Logo 1.jpg"
                alt="iselllogistics Logo"
                className="object-contain w-full h-full"
            />
        </a>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-3">
        {navItems.map((item) => (
          <a
            key={item.name} // Using item.name as key for uniqueness
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage(item.path);
            }}
            className={`flex items-center px-4 py-3 rounded-lg text-left ${
              activePage === item.path // Correct comparison for active state
                ? 'bg-green-100 text-green-700 font-medium' // Active styles
                : 'text-black hover:bg-gray-100' // Inactive styles
            }`}
          >
            <div className="relative mr-3 h-7 w-7 text-24">
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="object-contain w-full h-full"
              />
            </div>
            {item.name}
          </a>
        ))}
      </nav>

        <button className="mt-20 ml-10 font-medium" style={btnColor}>
            Logout
        </button>
    </div>
  );
}