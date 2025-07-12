'use client'

import React from 'react';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

const Notification = ({ isNavOpen, setIsNavOpen }) => {
  const notifications = [
    { id: 1, message: 'Your Packaged has been shipped', time: '4hrs ago' },
    { id: 2, message: 'Your Product has been Deleted', time: '3hrs ago' },
    { id: 3, message: 'Your Product has been shipped', time: '2hrs ago' },
    { id: 4, message: 'Your Product has been shipped', time: '30mins ago' },
  ];

  // Uncomment the line below to test the "No Notifications Yet" state
  // const notifications = [];

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* Menu Toggle Button */}
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Content Area */}
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Notification</h1>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8 w-full max-w-full box-border">
          <p className="text-gray-700 text-sm sm:text-base">
            Track your shipment status, share updates with friends, and discover local pickup options.
          </p>
        </div>

        {notifications.length > 0 ? (
          <div className="space-y-4 w-full max-w-full">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                message={notification.message}
                time={notification.time}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center mt-6 sm:mt-8 w-full max-w-full box-border">
            <div className="flex justify-center mb-3 sm:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">No Notifications Yet</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Start Shipping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const NotificationItem = ({ message, time }) => {
  return (
    <div className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm mb-3 w-full max-w-full box-border">
      <div className="mr-3 sm:mr-4 text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="flex-1 text-gray-800 text-sm sm:text-base font-medium">{message}</div>
      <div className="text-gray-500 text-xs sm:text-sm">{time}</div>
    </div>
  );
};

export default Notification;