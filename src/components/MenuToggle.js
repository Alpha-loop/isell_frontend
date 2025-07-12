'use client'; // This directive is necessary for client components

import React from 'react';

export default function MenuToggle({ isNavOpen, setIsNavOpen }) {
  return (
    <button
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      onClick={() => setIsNavOpen(!isNavOpen)}
      aria-label="Toggle navigation menu"
    >
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        />
      </svg>
    </button>
  );
}