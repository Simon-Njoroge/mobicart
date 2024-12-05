import React, { useState, useEffect } from 'react';
import { backend_url } from './home';
import axios from 'axios';
import { Tproduct } from './alltypes';
import Nav from './nav';
import { useLocation } from 'react-router-dom'; 
import Footer from './footer';
import NotFound from './notfound';
const Searched: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Tproduct[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || ''; 

  // Fetch data from the backend
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const response = await axios.get(`${backend_url}/all/products`);
        // console.log("Fetched Products: ", response.data); 
        setSearchResults(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    searchProduct();
  }, []);

  // console.log("Search Query: ", query);

  // Ensure query is always a string and apply safe checks on product name
  const filteredProducts = searchResults.filter((product) => {
    console.log("Checking product name:", product.name); // Log the product name
    return product.name?.toLowerCase().includes(query?.toLowerCase());
  });

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-2">
        {/* Display filtered products */}
        {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
       <a href={`/learnmore/${product.id}?query=${product.name}`}>
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">{product.name}</h1>
        <p className="text-lg font-bold text-green-600">Ksh {product.price}</p>
        <p className="text-sm line-through text-gray-400">
          Ksh {product.price * 2}
        </p>
      </div>
      </a>
    </div>
  ))
) : (
  <NotFound />
)}

      </div>
      <Footer/>
    </div>
  );
};

export default Searched;
