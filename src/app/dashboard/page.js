'use client'

import React from 'react';
import { useState } from 'react';
import RecentShipmentsTable from '@/components/shippingTable';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

const OverviewCard = ({ icon, value, label, isWallet = false }) => {
  return (
    <div className={`h-40 py-3 px-2 rounded-lg shadow-md flex flex-col gap-4 justify-between ${isWallet ? 'bg-green-500 text-white' : 'bg-white'} w-full max-w-full box-border`}>
      <div>
        {
          isWallet ? <div className='flex justify-end'>{icon}</div> : <div className={`text-lg sm:text-2xl font-semibold text-end ${isWallet ? 'text-white' : 'text-gray-800'}`}>{value}</div>
        }
      </div>
      <div className={`text-2xl ${isWallet ? 'text-white' : 'text-gray-400'}`}>
        {
          isWallet ? 
          <>
            <div className={`text-xs sm:text-sm ${isWallet ? 'text-white' : 'text-gray-500'}`}>{label}</div>
            <div className={`text-lg sm:text-2xl font-semibold`}>{value}</div>
          </> :
          <>
            {icon}
            <div className={`text-base sm:text-lg font-normal ${isWallet ? 'text-white' : 'text-gray-500'}`}>{label}</div>
          </> 
        }
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---
const Dashboard = ({ isNavOpen, setIsNavOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://placehold.co/600x200/ADD8E6/000000?text=Get+it+delivered+Globally', alt: 'Global Delivery' },
    { src: 'https://placehold.co/600x200/90EE90/000000?text=Fast+and+Reliable', alt: 'Fast Delivery' },
    { src: 'https://placehold.co/600x200/FFD700/000000?text=Secure+Shipping', alt: 'Secure Shipping' },
  ];

  const shipmentData = [
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
  ];

  const tableHeaders = ['Track ID', 'Product Name', 'Source', 'Destination', 'Expected date', 'Status'];

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* Menu Toggle Button */}
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Overview</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 w-full max-w-full">
          <OverviewCard
            icon={
              <img
                src='/images/Truck.jpg'
                alt='Total Shipments'
                className="object-contain w-8 h-5 sm:w-13 sm:h-8"
              />
            }
            value="20"
            label="Total Shipments"
          />
          <OverviewCard
            icon={
              <img
                src='/images/ArrowFatUp.jpg'
                alt='Total Exports'
                className="object-contain w-8 h-5 sm:w-13 sm:h-8"
              />
            }
            value="8"
            label="Total Exports"
          />
          <OverviewCard
            icon={
              <img
                src='/images/ArrowFatUp (1).jpg'
                alt='Total Imports'
                className="object-contain w-8 h-5 sm:w-13 sm:h-8"
              />
            }
            value="7"
            label="Total Imports"
          />
          <OverviewCard
            icon={
              <img
                src='/images/Vector.jpg'
                alt='Wallet Balance'
                className="object-contain w-8 h-5 sm:w-13 sm:h-8"
              />
            }
            isWallet={true}
            value="NGN 250,000.00"
            label="Wallet Balance"
          />
        </div>

        {/* Banner/Carousel Section */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-6 w-full max-w-full">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-24 sm:h-48 object-cover object-center max-w-full"
          />
          <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white text-base sm:text-3xl font-bold max-w-[70%] truncate">
            {images[currentImage].alt === 'Global Delivery' ? 'Get it delivered Globally' : ''}
          </div>
          <img
            src='https://placehold.co/100x40/FFFFFF/000000?text=Bell+Logistics'
            alt="Bell Logistics Logo"
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 h-6 sm:h-10 max-w-[80px] sm:max-w-[100px]"
          />
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-400'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Recent Shipments Table */}
        <div className="w-full max-w-full overflow-x-auto">
          <RecentShipmentsTable
            data={shipmentData}
            title="Recent Shipment"
            headers={tableHeaders}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;