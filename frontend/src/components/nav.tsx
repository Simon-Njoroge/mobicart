import { Search, User, HelpCircle, ShoppingCart ,AlignJustify} from "lucide-react";
import React from "react"

const Nav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group">
            <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
              <AlignJustify size={20} />
              <span>MobiCart</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 left-0 w-48">
              <ul className="text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/login">Login</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/register">Register</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/orders">My Orders</a>
                </li>
              </ul>
            </div>
          </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 ">
          <form className="flex items-center border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              className="w-full px-4 py-2 outline-none bg-white text-black"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 flex items-center"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center gap-6">
          {/* Account Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
              <User size={20} />
              <span>Account</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 right-0 w-48">
              <ul className="text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/login">Login</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/register">Register</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/orders">My Orders</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
              <HelpCircle size={20} />
              <span>Help</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 right-0 w-48">
              <ul className="text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/contact">Contact Us</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/shipping">Shipping Info</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Cart Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 right-0 w-64">
              <div className="p-4">
                <p className="text-gray-800">Your cart is empty!</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
