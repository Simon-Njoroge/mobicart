import React, { useEffect, useState } from 'react'
import { backend_url } from './home'
import { Tproduct } from './alltypes'
import axios from 'axios'
import {MoonLoader} from 'react-spinners'
function Appliances() {
const [appliances, setAppliances]=useState<Tproduct[]>([])
   const fetchAppliances= async ()=>{
    try{
        const response = await axios.get(`${backend_url}/all/appliances/`)
        setAppliances(response.data)
    }
    catch(error){
        console.error("fetching failed",error)
    }
   }
useEffect(()=>{
    fetchAppliances()
},[])
  return (
    <div>
       <div className="container mx-auto p-4">
      {appliances.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appliances.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
               <a href={`/learnmore/${app.id}`}>
              <img
                src={app.image_url}
                alt={app.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{app.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {app.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {app.price * 2}
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

export default Appliances
