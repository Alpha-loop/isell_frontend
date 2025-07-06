'use client'

import React from 'react';
import { useState } from 'react';
import NavBar from '@/components/navbar';
import RecentShipmentsTable from '@/components/shippingTable';
import Header from '@/components/header';


const OverviewCard = ({ icon, value, label, isWallet = false }) => {
  return (
    <div className={`h-45 py-4 px-3 rounded-lg shadow-md flex flex-col gap-5 justify-between ${isWallet ? 'bg-green-500 text-white' : 'bg-white'}`}>
      <div>
        {
            isWallet ? <div className='flex justify-end'>{icon}</div> : <div className={`text-2xl font-semibold text-end ${isWallet ? 'text-white' : 'text-gray-800'}`}>{value}</div>
        }
      </div>
      <div className={`text-4xl ${isWallet ? 'text-white' : 'text-gray-400'}`}>
        {
            isWallet ? 
            <>
                <div className={`text-sm ${isWallet ? 'text-white' : 'text-gray-500'}`}>{label}</div>
                <div className={`text-2xl font-semibold`}>{value}</div>
            </> :
            <>
                {icon}
                <div className={`text-lg font-normal ${isWallet ? 'text-white' : 'text-gray-500'}`}>{label}</div>
            </> 
        }
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---
const Dashboard = () => { // Renamed to App for default export in Canvas
  const shipmentData = [
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
  ];

  const tableHeaders = ['Track ID', 'Product Name', 'Source', 'Destination', 'Expected date', 'Status'];

  // Example of using state for a basic carousel or dynamic content
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://placehold.co/600x200/ADD8E6/000000?text=Get+it+delivered+Globally', alt: 'Global Delivery' },
    { src: 'https://placehold.co/600x200/90EE90/000000?text=Fast+and+Reliable', alt: 'Fast Delivery' },
    { src: 'https://placehold.co/600x200/FFD700/000000?text=Secure+Shipping', alt: 'Secure Shipping' },
  ];

  // Placeholder for the "Bell Logistics" logo
  const bellLogisticsLogo = 'https://placehold.co/100x40/FFFFFF/000000?text=Bell+Logistics';

  return (
    // <div className="min-h-screen bg-gray-100 font-sans overflow-hidden">
    //   {/* Fixed Sidebar Navigation */} {/* Using your NavBar component */}

    //   {/* Main Content Area */}
    //   <div className="flex-1 p-4 sm:p-6 lg:p-8 mr-10"> {/* ml-80 to offset the fixed navbar width */}
    //     {/* Header */}
    //     <Header />

    //     <h1 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h1>

    //     {/* Overview Cards */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
    //     </div>

    //     {/* Banner/Carousel Section */}
    //     <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
    //       <img
    //         src={images[currentImage].src}
    //         alt={images[currentImage].alt}
    //         className="w-full h-48 object-cover object-center"
    //       />
    //       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold">
    //         {images[currentImage].alt === 'Global Delivery' ? '' : ''}
    //       </div>
    //       <img
    //         src='/images/New Logo 1.jpg'
    //         alt="Bell Logistics Logo"
    //         className="absolute bottom-4 right-4 h-10"
    //       />
    //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    //         {images.map((_, index) => (
    //           <button
    //             key={index}
    //             onClick={() => setCurrentImage(index)}
    //             className={`h-2 w-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-400'}`}
    //           ></button>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Recent Shipments Table */}
    //     <RecentShipmentsTable
    //       data={shipmentData}
    //       title="Recent Shipment"
    //       headers={tableHeaders}
    //     />
    //   </div>
    // </div>
    <>
      <Header />

      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <OverviewCard
        icon={
            <img
            src='/images/Truck.jpg'
            alt='Whatsapp'
            className="object-contain w-13 h-8" // Added w-full h-full to mimic fill
            />
        }
        value="20"
        label="Total Shipments"
        />
        <OverviewCard
        icon={
            <img
            src='/images/ArrowFatUp.jpg'
            alt='Whatsapp'
            className="object-contain w-13 h-8" // Added w-full h-full to mimic fill
            />
        }
        value="8"
        label="Total Exports"
        />
        <OverviewCard
        icon={
            <img
            src='/images/ArrowFatUp (1).jpg'
            alt='Whatsapp'
            className="object-contain w-13 h-8" // Added w-full h-full to mimic fill
            />
        }
        value="7"
        label="Total Imports"
        />
        <OverviewCard
        icon={
            <img
            src='/images/Vector.jpg'
            alt='Whatsapp'
            className="object-contain w-13 h-8" // Added w-full h-full to mimic fill
            />
        }
        isWallet={true}
        value="NGN 250,000.00"
        label="Wallet Balance"
        />
      </div>

      {/* Banner/Carousel Section */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold">
          {images[currentImage].alt === 'Global Delivery' ? 'Get it delivered Globally' : ''}
        </div>
        <img
          src='https://placehold.co/100x40/FFFFFF/000000?text=Bell+Logistics' // Placeholder for Bell Logistics logo
          alt="Bell Logistics Logo"
          className="absolute bottom-4 right-4 h-10"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Recent Shipments Table */}
      <RecentShipmentsTable
        data={shipmentData}
        title="Recent Shipment"
        headers={tableHeaders}
      />
    </>
  );
};

export default Dashboard;