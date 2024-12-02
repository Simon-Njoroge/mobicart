import React, { useEffect, useState } from 'react'
import { backend_url } from './home'
import { Tproduct } from './alltypes'
import axios from 'axios'
import {MoonLoader} from 'react-spinners'
function Baby() {
    const [baby, setBaby] = useState<Tproduct[]>([])
    const fetchBaby = async () => {
        try {
            const response = await axios.get(`${backend_url}/all/baby/`)
            setBaby(response.data)
        }
        catch (error) {
            console.error("fetching failed", error)
        }
    }
    useEffect(() => {
        fetchBaby()
    }, [])

    return (
        <div>
 <div className="container mx-auto p-4">
      {baby.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {baby.map((bab) => (
            <div
              key={bab.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <a href={`/learnmore/${bab.id}`}>
              <img
                src={bab.image_url}
                alt={bab.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{bab.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {bab.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {bab.price * 2}
                </p>
              </div></a>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <MoonLoader />
        </div>
      )}
    </div>
        </div>
    )
}

export default Baby
