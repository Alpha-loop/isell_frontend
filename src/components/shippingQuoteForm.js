"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ShippingQuoteForm = () => {
  const [formData, setFormData] = useState({
    fromCountry: 'Nigeria',
    fromState: '',
    deliveryCountry: 'Paris',
    deliveryCity: 'Venice',
    weightKG: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const cities = {
    Paris: ['Venice', 'Paris'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const origin = formData.fromState ? `${formData.fromCountry}, ${formData.fromState}` : formData.fromCountry;
    const destination = `${formData.deliveryCountry}, ${formData.deliveryCity}`;
    const weight = parseFloat(formData.weightKG);

    if (!origin || !destination || isNaN(weight) || weight <= 0) {
      setError('Please fill all fields with valid values');
      setLoading(false);
      return;
    }

    console.log('Sending:', { origin, destination, weight, dimensions: 'N/A' });

    try {
      const response = await axios.post('https://isell-backend.vercel.app/api/shipping-quote', {
        origin,
        destination,
        weight,
        dimensions: 'N/A',
      });
      console.log('Response:', response.data);
      router.push(
        `/quoteResult?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&quote=${encodeURIComponent(response.data.quote)}&currency=${encodeURIComponent(response.data.currency)}&estimatedDelivery=${encodeURIComponent(response.data.estimatedDelivery)}&weightKG=${encodeURIComponent(formData.weightKG)}`
      );
    } catch (err) {
      console.error('Axios Error:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-150 p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm sm:text-base">
                {error}
              </div>
            )}

            {/* From Section */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-medium text-gray-700">From</h2>
              <div className="flex md:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="fromCountry"
                    value={formData.fromCountry}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="fromState"
                    value={formData.fromState}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Delivery Country Section */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-medium text-gray-700">Delivery Country</h2>
              <div className="flex md:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="deliveryCountry"
                    value={formData.deliveryCountry}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="deliveryCity"
                    value={formData.deliveryCity}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Weight Section */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-medium text-gray-700">Weight KG</h2>
              <input
                type="number"
                name="weightKG"
                value={formData.weightKG}
                onChange={handleChange}
                placeholder="e.g., 40"
                min="0"
                step="0.1"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                required
              />
            </div>

            {/* Get Quote Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400"
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