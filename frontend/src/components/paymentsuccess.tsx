import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';


function PaymentSuccess() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleViewOrders = () => {
    navigate('/orders');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6">
      {/* Success Icon */}
      <div className="bg-green-100 p-6 rounded-full mb-6 flex justify-center items-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600" />
      </div>

      {/* Success Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Payment Successful!
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Thank you for your payment. Your transaction was completed successfully.
        You can now view your orders or return to the home page.
      </p>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleGoHome}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200"
        >
          Go to Home
        </button>
        <button
          onClick={handleViewOrders}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-200"
        >
          View Orders
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
