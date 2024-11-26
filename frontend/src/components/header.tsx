import React from 'react';

function Header() {
  return (
    <header className="bg-gray-400 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div>
            <p className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer hover:underline">
              Sell On Mobicart
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">MobiCart</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
