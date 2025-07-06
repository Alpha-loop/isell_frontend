"use client";
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ShippingQuoteForm from '@/components/shippingQuoteForm';

// Move all your page content into this component
function ShippingQuoteContent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('checklist');
  const searchParams = useSearchParams();

  // Get query parameters
  const origin = searchParams.get('origin') ? decodeURIComponent(searchParams.get('origin')) : 'Lagos, Nigeria';
  const destination = searchParams.get('destination') ? decodeURIComponent(searchParams.get('destination')) : 'Venice, Paris';
  const weightKG = searchParams.get('weightKG') ? decodeURIComponent(searchParams.get('weightKG')) : '40kg';
  const quote = searchParams.get('quote') ? parseFloat(decodeURIComponent(searchParams.get('quote'))) : 250000;
  const currency = searchParams.get('currency') ? decodeURIComponent(searchParams.get('currency')) : 'NGN';
  const estimatedDelivery = searchParams.get('estimatedDelivery') ? decodeURIComponent(searchParams.get('estimatedDelivery')) : '3-5 business days';

  // Date calculations
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
    <div className="min-h-screen bg-white font-sans">
      <main className="p-4 sm:p-6 md:p-8 lg:p-15">
        {/* Shipping Quote Section */}
        <section className="bg-white rounded-xl p-4 sm:p-6 mb-8 flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="lg:w-150 pt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Shipping Quote</h1>
          
            <div className="space-y-4">
              <div className="flex h-15 w-full justify-between items-center border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/flight_takeoff.png"
                    alt="Truck Icon"
                    width={30}
                    height={30}
                  />
                  <p className="md:text-sm text-xs font-semibold text-gray-500">From</p>
                </div>
                <p className="md:text-lg text-base font-bold text-gray-900">{origin}</p>
              </div>
              
              <div className="flex h-15 w-full justify-between items-center border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/van.png"
                    alt="Truck Icon"
                    width={30}
                    height={30}
                  />
                  <p className="md:text-sm text-xs font-semibold text-gray-500">Delivery Country</p>
                </div>
                <p className="md:text-lg text-base font-bold text-gray-900">{destination}</p>
              </div>
              
              <div className="flex h-15 w-full justify-between items-center"> 
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/box.png"
                    alt="Truck Icon"
                    width={30}
                    height={30}
                  />
                  <p className="md:text-sm text-xs font-semibold text-gray-500">Estimated Weight</p>
                </div>
                <p className="md:text-lg text-base font-bold text-gray-900">{weightKG}kg</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="md:text-md text-sm text-gray-800 mb-3 md:h-10 md:w-36 h-6 w-30 bg-green-200 flex items-center justify-center rounded-4xl">
                Available offers
              </h2>
              <div className="space-y-3">
                <div className="border-gray-200 rounded-lg p-4 flex justify-between bg-gray-100 h-13">
                  <p className="text-gray-600 text-xs md:text-base">{today}</p>
                  <p className="md:text-2xl text-lg font-bold text-black">{currency} {quote.toFixed(2)}</p>
                </div>
                <div className="border-gray-200 rounded-lg p-4 flex justify-between bg-gray-100 h-13">
                  <p className="text-gray-600 text-xs md:text-base">{secondOfferDate}</p>
                  <p className="md:text-2xl text-lg font-bold text-black">{currency} {(quote + 25000).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-150 bg-green-800 flex items-center justify-center h-130">
            <ShippingQuoteForm />
          </div>
        </section>
        
        {/* Shipping Guides and Resources Section */}
        <section className="bg-white rounded-xl p-4 sm:p-6 md:p-10 lg:p-20">
          <div className="mb-6">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800">Shipping Guides and Resources</h2>
            <p className="text-gray-600 mt-2 text-xs md:text-base">Learn more on guides and resources for an Awesome Shipping Experience</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row sm:border-b border-gray-200 mb-6 gap-2 sm:gap-0">
            {['checklist', 'prohibited', 'non-served', 'documentation', 'gateway', 'broker'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === tab ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div>
            {activeTab === 'prohibited' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Prohibited Items</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>Firearms, explosives, and weapons of any kind</li>
                  <li>Flammable liquids, gases, and hazardous materials</li>
                  <li>Illegal drugs and narcotics</li>
                  <li>Perishable food items without proper preservation</li>
                  <li>Live animals without proper documentation</li>
                </ol>
              </div>
            )}

            {activeTab === 'non-served' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Non-served Countries</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>North Korea</li>
                  <li>Syria</li>
                  <li>Crimea Region</li>
                  <li>Cuba</li>
                  <li>Iran</li>
                </ol>
              </div>
            )}

            {activeTab === 'documentation' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Shipping Documentation</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>Commercial Invoice</li>
                  <li>Packing List</li>
                  <li>Certificate of Origin</li>
                  <li>Bill of Lading/Airway Bill</li>
                  <li>Insurance Certificate</li>
                </ol>
              </div>
            )}

            {activeTab === 'gateway' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Gateway Services</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>Customs Clearance</li>
                  <li>Cargo Inspection</li>
                  <li>Document Processing</li>
                  <li>Tax/Duty Calculation</li>
                  <li>Final Mile Coordination</li>
                </ol>
              </div>
            )}

            {activeTab === 'broker' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Broker Directory</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>John Doe - johndoe@logistics.com</li>
                  <li>Jane Smith - janesmith@logistics.com</li>
                  <li>Michael Brown - mbrown@logistics.com</li>
                  <li>Sarah Johnson - sjohnson@logistics.com</li>
                  <li>David Wilson - dwilson@logistics.com</li>
                </ol>
              </div>
            )}

            {activeTab === 'checklist' && (
              <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Smart Shipping Checklist</h1>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                  <li>Verify sender/receiver details</li>
                  <li>Check item eligibility</li>
                  <li>Provide detailed item breakdown</li>
                  <li>Confirm item count matches documentation</li>
                  <li>Consider insurance for valuable items</li>
                </ol>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <button 
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
              onClick={() => router.push('/signup')}
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// Main page component with Suspense boundary
export default function ShippingQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-lg text-gray-600">Loading shipping quote...</div>
      </div>
    }>
      <ShippingQuoteContent />
    </Suspense>
  );
}