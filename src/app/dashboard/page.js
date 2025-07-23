'use client'

import React, { useState, useEffect } from 'react'; // Import useEffect
import RecentShipmentsTable from '@/components/shippingTable';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

// Import your services
import { getUserProfile, getDashboardData } from '../../api/authService'; // Contains getUserProfile and getDashboardData
import { getRecentShipments } from '../../api/shipmentServices'; // Contains getRecentShipments

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
    { src: '/images/Iselllogistics c.jpg', alt: 'Global Delivery' },
    { src: '/images/Iselllogistics.jpg', alt: 'Fast Delivery' },
    { src: '/images/IselllogisticsB.jpg', alt: 'Secure Shipping' },
  ];

  // States to hold data fetched from the backend
  const [userProfile, setUserProfile] = useState(null);
  const [dashboardOverview, setDashboardOverview] = useState({
    totalShipments: 0,
    totalExports: 0,
    totalImports: 0,
    walletBalance: '0.00' // Ensure this is a string to match the NGN format
  });
  const [recentShipments, setRecentShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const tableHeaders = ['Track ID', 'Product Name', 'Source', 'Destination', 'Expected date', 'Status'];

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(''); // Clear previous errors

        // Fetch user profile
        const profileResponse = await getUserProfile();
        console.log('this is profileResponse', profileResponse)
        setUserProfile(profileResponse.data); // Assuming profile data is in response.data

        // Fetch dashboard overview data
        const dashboardResponse = await getDashboardData();
        console.log('this is dashboardResponse', dashboardResponse)
        // Assuming your backend returns { totalShipments, totalExports, totalImports, walletBalance }
        setDashboardOverview({
          totalShipments: dashboardResponse.totalShipments || 0,
          totalExports: dashboardResponse.totalExports || 0,
          totalImports: dashboardResponse.totalImports || 0,
          // Format walletBalance as currency if needed, backend should send numerical value
          walletBalance: `NGN ${parseFloat(dashboardResponse.walletBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
        });

        // Fetch recent shipments
        // const shipmentsResponse = await getRecentShipments();
        // // Backend shipments array might need mapping to match your table's expected keys
        // // Assuming backend shipment object has fields like:
        // // { _id, trackingId, productName, sourceAddress, destinationAddress, expectedDeliveryDate, status }
        // const formattedShipments = shipmentsResponse.data.map(shipment => ({
        //     trackid: shipment.trackingId,
        //     productname: shipment.productName,
        //     source: shipment.sourceAddress, // Or just city/country
        //     destination: shipment.destinationAddress, // Or just city/country
        //     expecteddate: new Date(shipment.expectedDeliveryDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short' }), // Format date
        //     status: shipment.status
        // }));
        // setRecentShipments(formattedShipments);

      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        const apiErrorMessage = err.response?.data?.message || 'Failed to load dashboard data. Please try again.';
        setError(apiErrorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []); // Empty dependency array means this runs once on mount

  // Handle loading and error states for the UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
        <button onClick={() => window.location.reload()} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Retry</button>
      </div>
    );
  }


  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* Menu Toggle Button */}
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        {/* Pass userProfile to Header if Header displays user name/info */}
        <Header userProfile={userProfile} /> 

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Overview</h1>

        {/* Overview Cards - Use data from dashboardOverview state */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 w-full max-w-full">
          <OverviewCard
            icon={
              <img
                src='/images/Truck.jpg'
                alt='Total Shipments'
                className="object-contain w-8 h-5 sm:w-13 sm:h-8"
              />
            }
            value={dashboardOverview.totalShipments}
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
            value={dashboardOverview.totalExports}
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
            value={dashboardOverview.totalImports}
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
            value={dashboardOverview.walletBalance}
            label="Wallet Balance"
          />
        </div>

        {/* Banner/Carousel Section - no change needed here as it's static/frontend controlled */}
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

        {/* Recent Shipments Table - Use data from recentShipments state */}
        <div className="w-full max-w-full overflow-x-auto">
          <RecentShipmentsTable
            data={recentShipments} // Pass the fetched data
            title="Recent Shipment"
            headers={tableHeaders}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;