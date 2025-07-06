'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResourcesCenter() {
  const [activeTab, setActiveTab] = useState('privacy');

  const bgStyle = {
    background: '#D3FFCD',
 
  }
  return (
    <div className="flex min-h-screen">
      {/* Left Navigation Sidebar */}
      <div className="w-120 bg-white py-20 px-15">
        <div className="h-65 w-100 rounded-2xl px-8 py-10" style={bgStyle}>
          <h1 className="text-24 font-semibold text-black mb-4">Resources Centre</h1>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`w-full text-left px-6 py-3 rounded-md h-13 bg-white`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`w-full text-left px-6 py-3 rounded-md h-13 bg-white`}
            >
              Terms & Conditions
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-30">
        {activeTab === 'privacy' ? (
          <PrivacyPolicyContent />
        ) : (
          <TermsConditionsContent />
        )}
      </div>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Privacy Policy</h1>
      <h2 className="text-20 font-normal text-gray-800 mb-1">iSell logistics Privacy Policy</h2>
      <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <p className="text-gray-700 mb-6 text-[20]">
        At iSell logistics, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services ("Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Who We Are</h3>
          <p className="text-gray-700">
            iSell logistics is a shipping and logistics platform based in Nigeria, facilitating seamless delivery services to over 300 countries worldwide.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h3>
          <p className="text-gray-700 mb-4">
            We collect various types of information to provide and improve our Services to you.
          </p>

          <h4 className="text-lg font-medium text-gray-800 mb-2">A. Personal Data (Information you provide to us directly):</h4>
          <p className="text-gray-700 mb-4">
            This includes information that can be used to identify you directly or indirectly.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Account Information:</span> Name, email address, phone number, physical address (for billing and shipping), company name (if applicable), and password.
            </li>
            <li>
              <span className="font-medium">Shipment Details:</span> Sender and recipient names, addresses, phone numbers, email addresses, package contents, value, dimensions, weight, and special delivery instructions.
            </li>
            <li>
              <span className="font-medium">Payment Information:</span> Billing address, payment method details (e.g., credit card number, bank account details). While we process payments, sensitive payment card details are typically handled by secure third-party payment processors and not stored directly on our servers.
            </li>
            <li>
              <span className="font-medium">Communication Data:</span> Records of your correspondence with our customer support, feedback, and survey responses.
            </li>
            <li>
              <span className="font-medium">Identification Information (for customs/regulatory purposes):</span> Depending on the destination and nature of the shipment, we may collect government-issued ID numbers (e.g., Passport, NIN, BVN), tax identification numbers, or other necessary documentation to comply with international shipping and customs regulations.
            </li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

function TermsConditionsContent() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">iSell logistics Terms of Service</h2>
      <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
          <p className="text-gray-700">
            By accessing or using the iSell logistics platform, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms, you may not access or use our services.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Service Description</h3>
          <p className="text-gray-700">
            iSell logistics provides a digital platform connecting shippers with logistics services for domestic and international shipments. We facilitate but are not directly responsible for the physical transportation of goods.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. User Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Provide accurate and complete information for all shipments</li>
            <li>Ensure all packages comply with applicable laws and regulations</li>
            <li>Properly package and label all shipments</li>
            <li>Pay all applicable fees and charges</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}