import React, { useEffect, useState } from 'react';
import Nav from './nav';
import Footer from './footer';
import axios from 'axios';
import { Tproduct } from './alltypes';
import { backend_url } from './home';
import { useParams } from 'react-router-dom';

function Learnmore() {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState<Tproduct[]>([]);
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/products/`);
      setAllProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch the products', error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const product = allProducts?.find(p => p.id === Number(id));
  console.log(product);

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
            <button className="btn btn-primary bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
            <button className="btn btn-primary bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Learnmore;
