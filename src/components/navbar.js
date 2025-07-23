'use client'

import React from 'react';

export default function NavBar({ activePage, setActivePage, isNavOpen, setIsNavOpen }) {
  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: '/images/SquaresFour (1).jpg'
    },
    {
      name: 'Shipment',
      path: '/shipment',
      icon: '/images/Truck.jpg'
    },
    {
      name: 'Our Services',
      path: '/services',
      icon: '/images/Cube.jpg'
    },
    {
      name: 'Notification',
      path: '/notification',
      icon: '/images/BellRinging.jpg'
    },
    {
      name: 'Addresses',
      path: '/addresses',
      icon: '/images/MapPinLine.jpg'
    },
    {
      name: 'Get Quotes',
      path: '/getQuotes',
      icon: '/images/Wallet.jpg'
    }
  ];

  const btnColor = {
    color: '#F50E0E',
  };

  return (
    <div
      className={`w-80 bg-white shadow-md px-10 py-6 h-screen fixed z-50 ${isNavOpen ? 'block' : 'hidden'} md:block`}
    >
      {/* Logo */}
      <div className="block mb-8 h-20 w-40 relative mt-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('/dashboard');
            setIsNavOpen(false); // Close navbar on mobile
          }}
        >
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
            key={item.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage(item.path);
              setIsNavOpen(false); // Close navbar on mobile
            }}
            className={`flex items-center px-4 py-3 rounded-lg text-left ${
              activePage === item.path
                ? 'bg-green-100 text-green-700 font-medium'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <div className="relative mr-3 h-7 w-7">
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