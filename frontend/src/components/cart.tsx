import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "./home"; // Assuming backend_url is correctly defined
import { TCart } from "./alltypes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userslice";
function Cart() {
  const [cart, setCart] = useState<TCart[]>([]);
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.user);

  useEffect(() => {
   
      fetchCart();},[]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isAuthenticated && localStorage.getItem("user")) {
      const storedUser = JSON.parse(localStorage.getItem("user")!);
      dispatch(setUser(storedUser));
    }
  }, [dispatch, user.isAuthenticated]);
  const fetchCart = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/carts/user-cart-items?email=${user.email}`);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleCheckout = () => {
    window.location.href = "http://127.0.0.1:8000/";
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between items-start space-y-4"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.product}
                  </h2>
                  <p className="text-gray-600">
                    User: {user.firstName} {user.lastName}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: {item.price}</p>
                  <p className="text-gray-600">
                    Total: {item.price * item.quantity}
                  </p>
                </div>
                <button className="text-red-600 hover:text-red-800 font-semibold px-4 py-2 rounded-full border border-red-600 hover:bg-red-100 transition duration-200 w-full">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleCheckout}
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleClick}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
