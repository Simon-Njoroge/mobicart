import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150" // You can replace this with an actual "not found" image
          alt="Not Found"
          className="w-24 h-24 mb-4"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! No products found.</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find any products that match your search criteria. Please try again with a different term.
        </p>
        <a href="/" className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
