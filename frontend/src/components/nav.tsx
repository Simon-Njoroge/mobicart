import { Search, User, HelpCircle, ShoppingCart, AlignJustify, Store, Refrigerator, Smartphone, Tv, Heart, Home, Shirt, Monitor, Baby } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TNavbar } from "./alltypes";
import { backend_url } from "./home";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [navb, setNav] = useState<TNavbar[]>([]);
  const [query, setQuery] = useState<string>(""); 
  const navigate = useNavigate(); 

  const fetchNav = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/categories/`);
      setNav(response.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  useEffect(() => {
    fetchNav();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (query.trim()) {
      
      navigate(`/searched?query=${query}`);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
            <AlignJustify size={20} />
            <span>MobiCart</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 left-0 w-48">
            <ul className="text-gray-800">
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Store className="w-5 h-5 mr-2" />
                <a href="/">Official Stores</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                <a href="/Phones&Tablets">Phones & Tablets</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Tv className="w-5 h-5 mr-2" />
                <a href="/TVs&Audio">TVs & Audio</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Refrigerator className="w-5 h-5 mr-2" />
                <a href="/Appliances">Appliances</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <a href="/Health&Beauty">Health & Beauty</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                <a href="/Home&Office">Home & Office</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Shirt className="w-5 h-5 mr-2" />
                <a href="/Fashion">Fashion</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Monitor className="w-5 h-5 mr-2" />
                <a href="/Computing">Computing</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <a href="/Supermarket">Supermarket</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <Baby className="w-5 h-5 mr-2" />
                <a href="/BabyProducts">Baby Products</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update the query state
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
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 right-0 w-48">
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
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 right-0 w-48">
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
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 right-0 w-64">
              <div className="p-4">
                <p className="text-gray-800">Your cart is empty!</p>
                <a href="/cart">
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600">
                    View Cart
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
