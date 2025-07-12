'use client'

import React from 'react';
import { useState } from 'react';
import NavBar from '@/components/navbar';
import Dashboard from './dashboard/page';
import Shipment from './shipment/page';
import Notification from './notification/page';
import Services from './services/page';
import GetQoutes from './getQuotes/page';

export default function Home() {
  const [activePage, setActivePage] = useState('/dashboard'); // Match NavBar path
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case '/dashboard':
        return <Dashboard isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
      case '/shipment':
        return <Shipment isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
      case '/notification':
        return <Notification isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
      case '/services':
        return <Services isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
      case '/wallet':
        return <div className="p-3 sm:p-6 text-center text-lg sm:text-xl font-bold w-full max-w-full">Wallet Page Content (Coming Soon!)</div>;
      case '/addresses':
        return <div className="p-3 sm:p-6 text-center text-lg sm:text-xl font-bold w-full max-w-full">Addresses Page Content (Coming Soon!)</div>;
      case '/getQuotes':
        return <GetQoutes isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
      default:
        return <Dashboard isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans overflow-x-hidden">
      {/* Fixed Sidebar Navigation */}
      <NavBar activePage={activePage} setActivePage={setActivePage} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="flex-1 p-3 sm:p-6 md:ml-80 w-full max-w-full box-border">
        {renderContent()}
      </div>
    </div>
  );
}