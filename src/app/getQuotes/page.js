'use client'

import React from 'react';
import ShippingQuoteForm from '@/components/shippingQuoteForm';
import Header from '@/components/header';
import MenuToggle from '@/components/MenuToggle';

const GetQoutes = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      <MenuToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="p-3 sm:p-6 w-full max-w-full box-border">
        <Header />
        <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6 w-full max-w-full">Get Quotes</h1>
        <div className="flex items-center justify-center">
          <ShippingQuoteForm redirectPath="/quoteResults" />
        </div>
      </div>
    </div>
  );
};

export default GetQoutes;