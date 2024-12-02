import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MobiCart</h2>
            <p className="text-gray-400">
              Your one-stop shop for the latest gadgets and accessories. Delivering quality at your fingertips.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Shop</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="material-icons mr-2">location_on</span>
                123 Tech Street, Nairobi, Kenya
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2">phone</span>
                +254 717 322 552
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2">email</span>
                support@mobicart.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest deals, updates, and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 rounded-md text-white font-semibold hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MobiCart. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition">Refund Policy</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
