'use client'

import React from 'react';
import ServiceCard from '@/components/serviceCard';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

// --- Main Our Services Component ---
const Services = ({ isNavOpen, setIsNavOpen }) => {
  const services = [
    {
      id: 1,
      title: 'Sea Cargo',
      description: 'Ship your cargo anywhere you want',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 12H7m3 0l3-3m-3 3l3 3" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: 2,
      title: 'Air Cargo',
      description: 'Ship your cargo anywhere, everywhere!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: 3,
      title: 'Frozen Foods',
      description: 'Keep your food fresh anywhere you want',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: 4,
      title: 'Express Delivery',
      description: 'Delivering to your door without complications!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: 5,
      title: 'National Delivery',
      description: 'Ship to your door with ease and convenience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: 6,
      title: 'Car Shipping Canada to Nigeria',
      description: 'Ship your car from Canada to Nigeria with ease and convenience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      isPrimary: true,
    },
  ];

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* Menu Toggle Button */}
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Our Services</h1>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8 w-full max-w-full box-border">
          <p className="text-gray-700 text-sm sm:text-base">
            Track your shipment status, share updates with friends, and discover local pickup options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isPrimary={service.isPrimary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;