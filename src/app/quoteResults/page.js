'use client'

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

const QuoteResults = ({ isNavOpen, setIsNavOpen }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origin = searchParams.get('origin') ? decodeURIComponent(searchParams.get('origin')) : 'Lagos, Nigeria';
  const destination = searchParams.get('destination') ? decodeURIComponent(searchParams.get('destination')) : 'Venice, Paris';
  const weightKG = searchParams.get('weightKG') ? decodeURIComponent(searchParams.get('weightKG')) : '40';
  const quote = searchParams.get('quote') ? parseFloat(decodeURIComponent(searchParams.get('quote'))) : 250000;
  const currency = searchParams.get('currency') ? decodeURIComponent(searchParams.get('currency')) : 'USD';
  const estimatedDelivery = searchParams.get('estimatedDelivery') ? decodeURIComponent(searchParams.get('estimatedDelivery')) : '3-5 business days';

  const [activeTab, setActiveTab] = useState('checklist');

  const today = new Date('2025-06-29T11:32:00+01:00').toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const secondDate = new Date('2025-06-29T11:32:00+01:00');
  secondDate.setDate(secondDate.getDate() + 1);
  const secondOfferDate = secondDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />
        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Shipping Quotes</h1>
        <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8 w-full max-w-full box-border">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/flight_takeoff.png"
                  alt="Origin Icon"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="text-sm sm:text-base font-semibold text-gray-500">From</p>
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-900">{origin}</p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/van.png"
                  alt="Destination Icon"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="text-sm sm:text-base font-semibold text-gray-500">Delivery Country</p>
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-900">{destination}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/box.png"
                  alt="Weight Icon"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="text-sm sm:text-base font-semibold text-gray-500">Estimated Weight</p>
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-900">{weightKG}kg</p>
            </div>
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 bg-green-200 inline-block px-4 py-1 rounded-full">
                Available Offers
              </h2>
              <div className="space-y-3">
                <div className="border-gray-200 rounded-lg p-3 sm:p-4 flex justify-between bg-gray-100">
                  <p className="text-gray-600 text-xs sm:text-sm">{today}</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{currency} {quote.toFixed(2)}</p>
                </div>
                <div className="border-gray-200 rounded-lg p-3 sm:p-4 flex justify-between bg-gray-100">
                  <p className="text-gray-600 text-xs sm:text-sm">{secondOfferDate}</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{currency} {(quote + 25000).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-full box-border">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Shipping Guides and Resources</h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">Learn more on guides and resources for an Awesome Shipping Experience</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:border-b border-gray-200 mb-4 sm:mb-6 gap-2 sm:gap-0">
            {['checklist', 'prohibited', 'non-served', 'documentation', 'gateway', 'broker'].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 text-xs sm:text-sm font-medium text-left sm:text-center ${activeTab === tab ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          <div className="w-full max-w-full">
            {activeTab === 'prohibited' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Prohibited Items</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>Firearms, explosives, and weapons of any kind</li>
                  <li>Flammable liquids, gases, and hazardous materials</li>
                  <li>Illegal drugs and narcotics</li>
                  <li>Perishable food items without proper preservation</li>
                  <li>Live animals without proper documentation</li>
                </ol>
              </div>
            )}
            {activeTab === 'non-served' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Non-served Countries</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>North Korea</li>
                  <li>Syria</li>
                  <li>Crimea Region</li>
                  <li>Cuba</li>
                  <li>Iran</li>
                </ol>
              </div>
            )}
            {activeTab === 'documentation' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Shipping Documentation</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>Commercial Invoice</li>
                  <li>Packing List</li>
                  <li>Certificate of Origin</li>
                  <li>Bill of Lading/Airway Bill</li>
                  <li>Insurance Certificate</li>
                </ol>
              </div>
            )}
            {activeTab === 'gateway' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Gateway Services</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>Customs Clearance</li>
                  <li>Cargo Inspection</li>
                  <li>Document Processing</li>
                  <li>Tax/Duty Calculation</li>
                  <li>Final Mile Coordination</li>
                </ol>
              </div>
            )}
            {activeTab === 'broker' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Broker Directory</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>John Doe - johndoe@logistics.com</li>
                  <li>Jane Smith - janesmith@logistics.com</li>
                  <li>Michael Brown - mbrown@logistics.com</li>
                  <li>Sarah Johnson - sjohnson@logistics.com</li>
                  <li>David Wilson - dwilson@logistics.com</li>
                </ol>
              </div>
            )}
            {activeTab === 'checklist' && (
              <div className="bg-green-50 rounded-lg border-2 sm:border-4 border-green-300 p-4 sm:p-6">
                <h3 className="bg-green-700 text-white py-2 px-3 sm:px-4 text-sm sm:text-base font-bold">Smart Shipping Checklist</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mt-3 sm:mt-4">
                  <li>Verify sender/receiver details</li>
                  <li>Check item eligibility</li>
                  <li>Provide detailed item breakdown</li>
                  <li>Confirm item count matches documentation</li>
                  <li>Consider insurance for valuable items</li>
                </ol>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300"
              onClick={() => router.push('/signup')}
            >
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuoteResults;