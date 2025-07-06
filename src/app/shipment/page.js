'use client'

import NavBar from "@/components/navbar";
import RecentShipmentsTable from "@/components/shippingTable";
import Header from "@/components/header";
import { useState } from "react";
import ShipmentTrackingModal from "@/components/shipmentTrackingModal";

const Shipment = () => {
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
    setSelectedShipment(null); // Clear selected shipment when closing
  };

  return (
    // <div className="flex min-h-screen bg-gray-100 font-sans">
    //   {/* Fixed Sidebar Navigation */}
    //   <NavBar />

    //   {/* Main Content Area */}
    //   <div className="flex-1 ml-80 p-4 sm:p-6 lg:p-8">
    //     {/* Header */}
    //     <Header />

    //     {/* Shipment Tracking Input */}
    //     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    //       <p className="text-gray-700 mb-4">
    //         Track your shipment status, share updates with friends, and discover local pickup options.
    //       </p>
    //       <div className="relative">
    //         <input
    //           type="text"
    //           placeholder="Q Track product name/ID here"
    //           className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //           />
    //         </svg>
    //       </div>
    //     </div>

    //     {/* Recent Shipments Table (reused component) */}
    //     <RecentShipmentsTable
    //       data={shipmentData}
    //       title="Recent Shipment"
    //       headers={tableHeaders}
    //       onRowClick={handleRowClick}
    //     />

    //     <ShipmentTrackingModal
    //         isOpen={showModal}
    //         onClose={handleCloseModal}
    //         shipment={selectedShipment}
    //     />
    //   </div>
    // </div>
    <>
      <Header />

      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Shipment</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-gray-700 mb-4">
          Track your shipment status, share updates with friends, and discover local pickup options.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Q Track product name/ID here"
            className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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

      <RecentShipmentsTable
        data={shipmentData}
        title="Recent Shipment"
        headers={tableHeaders}
        onRowClick={handleRowClick}
      />

      <ShipmentTrackingModal
        isOpen={showModal}
        onClose={handleCloseModal}
        shipment={selectedShipment}
      />
    </>
  );
};

export default Shipment;