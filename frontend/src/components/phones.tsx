import { backend_url } from './home';
import React, { useEffect, useState } from 'react';
import { Tproduct } from './alltypes';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Library } from 'lucide-react';
function Phones() {
  const [phones, setPhone] = useState<Tproduct[]>([]);

  const fetchPhone = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/phones/`);
      setPhone(response.data);
    } catch (error) {
      console.error('fetching failed', error);
    }
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {phones.length > 0 ? (
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {phones.map((phon) => (
           
        <div
              key={phon.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <a href={`/learnmore/${phon.id}`}>
              <img
                src={phon.image_url}
                alt={phon.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{phon.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {phon.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {phon.price * 2}
                </p>
              </div></a>
            </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader />
    </div>
  )
}
    </div >
  );
}

export default Phones;
