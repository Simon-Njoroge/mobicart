import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_url } from './home'; // Assuming backend_url is correctly defined in home
import { TCart } from './alltypes';

function Cart() {
  const [cart, setCart] = useState<TCart[]>([]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/cart/`);
      setCart(response.data);
    } catch (error) {
      console.error('Cart not found', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">My Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((crt) => (
            <div
              key={crt.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              {/* <img
                src={crt.image} // Assuming cart items have an image field
                alt={crt.name}
                className="w-32 h-32 object-cover mb-4"
              /> */}
              {/* <h2 className="text-lg font-medium text-gray-700">{crt.name}</h2>
              <p className="text-sm text-gray-500">Price: ${crt.price}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Remove
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Update
                </button>
              </div> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
          <button
            className="btn px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => window.location.href = '/'}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
