'use client'

import React from 'react';
import ShippingQuoteForm from '../components/shippingQuoteForm';
import NavBar from '@/components/navbar';
import { useState } from 'react';
import Dashboard from './dashboard/page';
import Shipment from './shipment/page';
import Notification from './notification/page';
import Services from './services/page';

export default function Home() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard': // Changed 'Dashboard' to 'dashboard' for consistency
        return <Dashboard />;
      case '/shipment':
        return <Shipment />;
      case '/notification':
        return <Notification />;
      case '/services':
        return <Services />;
      case '/wallet':
        return <div className="p-4 text-center text-xl font-bold">Wallet Page Content (Coming Soon!)</div>;
      case '/addresses':
        return <div className="p-4 text-center text-xl font-bold">Addresses Page Content (Coming Soon!)</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Fixed Sidebar Navigation - Pass activePage and setActivePage */}
      <NavBar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <div className="flex-1 ml-80 p-4 sm:p-6 lg:p-8"> {/* Corrected ml-80, removed mr-10 as it's not needed here */}
        {renderContent()}
      </div>
    </div>
  );
}