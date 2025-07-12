'use client'

import React from 'react';
import { useState } from 'react';
import RecentShipmentsTable from '@/components/shippingTable';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';
import ShipmentTrackingModal from '@/components/shipmentTrackingModal';

const Shipment = ({ isNavOpen, setIsNavOpen }) => {
  const shipmentData = [
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
    { trackid: 'AB-SHD', productname: 'Laptop', source: 'Lagos, NG', destination: 'Ontario, CN', expecteddate: '05 May', status: 'Shipped' },
  ];

  const tableHeaders = ['Track ID', 'Product Name', 'Source', 'Destination', 'Expected date', 'Status'];

  const [showModal, setShowModal] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const handleRowClick = (shipment) => {
    setSelectedShipment(shipment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedShipment(null);
  };

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* Menu Toggle Button */}
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 w-full max-w-full">Shipment</h1>
        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 w-full max-w-full">
          Track your shipment status, share updates with friends, and discover local pickup options.
        </p>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8 w-full max-w-full box-border">
          <div className="relative">
            <input
              type="text"
              placeholder="Track product name/ID here"
              className="pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg w-full max-w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="w-full max-w-full overflow-x-auto">
          <RecentShipmentsTable
            data={shipmentData}
            title="Recent Shipment"
            headers={tableHeaders}
            onRowClick={handleRowClick}
          />
        </div>

        <ShipmentTrackingModal
          isOpen={showModal}
          onClose={handleCloseModal}
          shipment={selectedShipment}
        />
      </div>
    </div>
  );
};

export default Shipment;