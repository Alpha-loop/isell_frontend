"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ShippingQuoteForm from '@/components/shippingQuoteForm'; // Adjust the import path as necessary

export default function ShippingQuotePage() {
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

  // Use current date and time (11:32 AM WAT, Sunday, June 29, 2025)
  const today = new Date('2025-06-29T11:32:00+01:00').toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const secondDate = new Date('2025-06-29T11:32:00+01:00');
  secondDate.setDate(secondDate.getDate() + 1); // Add 1 day for the second offer
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
          {/* Removed the embedded ShippingQuoteForm to avoid duplication */}
        </section>
        
        {/* Shipping Guides and Resources Section */}
        <section className="bg-white rounded-xl p-4 sm:p-6 md:p-10 lg:p-20">
          <div className="mb-6">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800">Shipping Guides and Resources</h2>
            <p className="text-gray-600 mt-2 text-xs md:text-base">Learn more on guides and resources for an Awesome Shipping Experience</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row sm:border-b border-gray-200 mb-6 gap-2 sm:gap-0">
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'checklist' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('checklist')}
            >
              Smart Shipping Checklist
            </button>
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'prohibited' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('prohibited')}
            >
              Prohibited Items
            </button>
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'non-served' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('non-served')}
            >
              Non-served Countries and Territories
            </button>
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'documentation' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('documentation')}
            >
              Shipping Documentation
            </button>
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'gateway' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('gateway')}
            >
              Gateway
            </button>
            <button
              className={`px-4 py-3 text-xs sm:text-base font-medium text-left sm:text-center ${activeTab === 'broker' ? 'text-green-700 sm:border-b-2 border-green-700 bg-green-50 sm:bg-transparent' : 'text-gray-500 hover:bg-gray-100 sm:hover:bg-transparent'} rounded-lg sm:rounded-none transition duration-200`}
              onClick={() => setActiveTab('broker')}
            >
              Broker Directory
            </button>
          </div>
          
          {/* Tab Content */}
          <div>
            {activeTab === 'prohibited' ? (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Prohibited Items</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Ensure sender and receiver's details are complete and correct.</li>
                    <li>Ensure contents are acceptable via Air or sea cargo. Kindly check prohibited list to confirm this.</li>
                    <li>Ensure proper and transparent item breakdown is done to avoid discrepancies.</li>
                    <li>Ensure all items are confirmed/counted and match your commercial invoice and item description. Be thorough to avoid under-declaring.</li>
                    <li>Insurance is not compulsory. However, it is advisable to insure packages.</li>
                  </ol>
                </div>
              </div>
            ) : activeTab === 'non-served' ? (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Non-served Countries and Territories</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Firearms, explosives, and weapons of any kind</li>
                    <li>Flammable liquids, gases, and hazardous materials</li>
                    <li>Illegal drugs and narcotics</li>
                    <li>Perishable food items without proper preservation</li>
                    <li>Live animals without proper documentation</li>
                    <li>Counterfeit currency and goods</li>
                    <li>Precious stones and metals without certification</li>
                    <li>Adult content and explicit material</li>
                  </ol>
                </div>
              </div>
            ) : activeTab === 'documentation' ? (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Shipping Documentation</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Commercial Invoice</li>
                    <li>Packing List</li>
                    <li>Certificate of Origin</li>
                    <li>Bill of Lading or Airway Bill</li>
                    <li>Export/Import Permits (if applicable)</li>
                    <li>Insurance Certificate (if insured)</li>
                    <li>Customs Declaration Form</li>
                    <li>Special Permits for Restricted Items</li>
                  </ol>
                </div>
              </div>
            ) : activeTab === 'gateway' ? (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Gateway</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Entry point for customs clearance</li>
                    <li>Processing of import/export documentation</li>
                    <li>Storage facilities for goods</li>
                    <li>Coordination with shipping lines</li>
                    <li>Security and safety checks</li>
                    <li>Transportation to final destination</li>
                    <li>Customs duty payment assistance</li>
                    <li>Tracking and monitoring services</li>
                  </ol>
                </div>
              </div>
            ) : activeTab === 'broker' ? (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Broker Directory</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Contact: John Doe - john.doe@broker.com</li>
                    <li>Contact: Jane Smith - jane.smith@broker.com</li>
                    <li>Contact: Michael Brown - michael.brown@broker.com</li>
                    <li>Contact: Sarah Johnson - sarah.johnson@broker.com</li>
                    <li>Contact: Robert Lee - robert.lee@broker.com</li>
                    <li>Contact: Emily Davis - emily.davis@broker.com</li>
                    <li>Contact: David Wilson - david.wilson@broker.com</li>
                    <li>Contact: Lisa Anderson - lisa.anderson@broker.com</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-full bg-green-50 rounded-2xl border-2 sm:border-4 border-green-300 py-6 sm:py-6 md:py-10">
                  <h1 className="w-full bg-green-700 text-white py-2 px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-bold">Smart Shipping Checklist</h1>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base mx-4 sm:mx-6 md:mx-10 my-4 sm:my-5 leading-relaxed">
                    <li>Verify sender and receiver details</li>
                    <li>Check item eligibility (Air/Sea cargo)</li>
                    <li>Provide detailed item breakdown</li>
                    <li>Confirm item count matches documentation</li>
                    <li>Consider insurance for valuable items</li>
                    <li>Prepare necessary shipping documents</li>
                    <li>Ensure compliance with customs regulations</li>
                    <li>Track shipment status regularly</li>
                  </ol>
                </div>
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
      
      {/* Back Button */}
      {/* <div className="max-w-4xl mx-auto px-4 py-6">
        <button 
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition duration-300"
          onClick={() => router.push('/')}
        >
          Back to Quote Form
        </button>
      </div> */}
      
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2025 Iselllogistics. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-green-400 hover:text-green-300 underline">Contact Us</a> | 
            <a href="#" className="text-green-400 hover:text-green-300 underline ml-2">Privacy Policy</a> | 
            <a href="#" className="text-green-400 hover:text-green-300 underline ml-2">Terms of Service</a>
          </p>
        </div>
      </footer> */}
    </div>
  );
}