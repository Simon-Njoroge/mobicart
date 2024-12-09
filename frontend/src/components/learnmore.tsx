import React, { useEffect, useState } from 'react';
import Nav from './nav';
import Footer from './footer';
import axios from 'axios';
import { Tproduct, TCart } from './alltypes';
import { backend_url } from './home';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Learnmore() {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState<Tproduct[]>([]);
  const [addcart, Setadd] = useState<TCart[]>([]);
  const [cartData, setCartData] = useState<any[]>({
    user: '',      // User's name
    product: '',   // Product name
    quantity: 0,   // Quantity of the product
    price: 0,      // Price of the product
  });
  const [showForm, setShowForm] = useState(false); 
  const user = useSelector((state: any) => state.user);
 
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/products/`);
      setAllProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch the products', error);
    }
  };

  // Fetch cart data
  const addCart = async () => {
    try {
      const res: any= await axios.get(`${backend_url}/all/carts/`);
      Setadd(res);
    } catch (error) {
      console.error(error, 'could not add to cart');
      toast.success('item added to cart')
    }
  };

  useEffect(() => {
    fetchAllProducts();
    addCart();
  }, []);

  const product = allProducts?.find((p) => p.id === Number(id));
  console.log(product);

  // Handle form submission to add product to cart
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (!cartData.user || !cartData.quantity || !cartData.product || !cartData.price) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Send the cart data to the backend
      const response = await axios.post(`${backend_url}/all/carts/`, cartData, {
        headers: {
          'Content-Type': 'application/json',
        }});
      console.log('Product added to cart', response);

      
      Setadd((prevCart) => [...prevCart, response.data]);

     
      setCartData({
        user: '',
        product: '',
        quantity: 0,
        price: 0,
      });

      // Hide the form after successful submission
      setShowForm(false);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCartData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Show the form when the user clicks the Add to Cart button
  const handleAddToCartClick = () => {
    if (product) {
      setCartData({
        ...cartData,
        user: user.email,
        product: product.name,
        price: product.price,
      });
      setShowForm(true); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-16">
        {/* Product Image */}
        <img
          src={product?.image_url}
          alt={product?.name}
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover rounded-lg shadow-lg"
        />

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product?.name}</h1>
          <p className="text-xl font-semibold text-green-600">Ksh {product?.price}</p>
          <p className="text-gray-600 text-justify">{product?.description}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCartClick}
              className="btn btn-primary bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
            <button className="btn btn-primary bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart Form (Appears when Add to Cart button is clicked) */}
      {showForm && (
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Add to Cart</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <label htmlFor="user" className="text-gray-600">Your Name:</label>
            <input
              type="text"
              id="user"
              name="user"
              value={cartData.user }
              onChange={handleInputChange}
              className="p-2 border rounded-lg"
              readOnly
            />
            <label htmlFor="product" className="text-gray-600">Product:</label>
            <input
              type="text"
              id="product"
              name="product"
              value={cartData.product}
              onChange={handleInputChange}
              className="p-2 border rounded-lg"
              readOnly
            />
            <label htmlFor="price" className="text-gray-600">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={cartData.price}
              onChange={handleInputChange}
              className="p-2 border rounded-lg"
              readOnly
            />
            <label htmlFor="quantity" className="text-gray-600">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={cartData.quantity}
              onChange={handleInputChange}
              className="p-2 border rounded-lg"
              min="1"
              required
            />
            <button type="submit" className="btn bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 transition duration-300">
              Submit to Cart
            </button>
          </form>
        </div>
      )}
     
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default Learnmore;
