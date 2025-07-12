'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ShippingQuoteForm = ({ redirectPath }) => {
  const allowedCountries = {
    'Nigeria': ['Lagos', 'Abuja', 'Port Harcourt', 'Kano'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'USA': ['New York', 'Los Angeles', 'Chicago', 'Miami'],
    'UK': ['London', 'Manchester', 'Birmingham', 'Liverpool']
  };

  const [formData, setFormData] = useState({
    fromCountry: '',
    fromCity: '',
    deliveryCountry: '',
    deliveryCity: '',
    weightKG: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...((name === 'fromCountry' || name === 'deliveryCountry') && {
        [`${name.split('Country')[0]}City`]: ''
      })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.fromCountry || !formData.fromCity || 
        !formData.deliveryCountry || !formData.deliveryCity || 
        !formData.weightKG || formData.weightKG <= 0) {
      setError('Please fill all fields with valid values');
      setLoading(false);
      return;
    }

    const origin = `${formData.fromCountry}, ${formData.fromCity}`;
    const destination = `${formData.deliveryCountry}, ${formData.deliveryCity}`;
    const weight = parseFloat(formData.weightKG);

    try {
      const response = await axios.post(
        'https://isell-backend.vercel.app/api/shipping-quote',
        {
          origin,
          destination,
          weight,
          dimensions: 'N/A',
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      router.push(`${redirectPath}?${
        new URLSearchParams({
          origin: encodeURIComponent(origin),
          destination: encodeURIComponent(destination),
          quote: response.data.quote,
          currency: response.data.currency || 'USD',
          estimatedDelivery: response.data.estimatedDelivery || '3-5 business days',
          weightKG: formData.weightKG
        }).toString()
      }`);

    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'Failed to fetch quote. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg p-4 sm:p-6 box-border">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-medium text-gray-700">From</h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <select
                    name="fromCountry"
                    value={formData.fromCountry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    required
                  >
                    <option value="">Select Country</option>
                    {Object.keys(allowedCountries).map(country => (
                      <option key={`from-${country}`} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <select
                    name="fromCity"
                    value={formData.fromCity}
                    onChange={handleChange}
                    disabled={!formData.fromCountry}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    required
                  >
                    <option value="">Select City</option>
                    {formData.fromCountry && 
                      allowedCountries[formData.fromCountry].map(city => (
                        <option key={`from-${city}`} value={city}>{city}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-medium text-gray-700">To</h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <select
                    name="deliveryCountry"
                    value={formData.deliveryCountry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    required
                  >
                    <option value="">Select Country</option>
                    {Object.keys(allowedCountries).map(country => (
                      <option key={`to-${country}`} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <select
                    name="deliveryCity"
                    value={formData.deliveryCity}
                    onChange={handleChange}
                    disabled={!formData.deliveryCountry}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    required
                  >
                    <option value="">Select City</option>
                    {formData.deliveryCountry && 
                      allowedCountries[formData.deliveryCountry].map(city => (
                        <option key={`to-${city}`} value={city}>{city}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-medium text-gray-700">Weight (KG)</h2>
              <input
                type="number"
                name="weightKG"
                value={formData.weightKG}
                onChange={handleChange}
                placeholder="e.g., 2.5"
                min="0.1"
                step="0.1"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400"
            >
              {loading ? 'Fetching Quote...' : 'Get a Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingQuoteForm;