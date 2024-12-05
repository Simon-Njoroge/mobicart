import React,{useState,useEffect} from 'react'
import { backend_url } from './home'
import { Tproduct } from './alltypes'
import axios from 'axios'
import {MoonLoader} from 'react-spinners'
function Computing() {
    const [computing, setComputing] = useState<Tproduct[]>([])
    const fetchComputing = async () => {
        try {
            const response = await axios.get(`${backend_url}/all/computing/`)
            setComputing(response.data)
        }
        catch (error) {
            console.error("fetching failed", error)
        }
    }
    useEffect(() => {
        fetchComputing()
    }, [])
    return (
        <div>
 <div className="container mx-auto p-4">
      {computing.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {computing.map((comp) => (
            <div
              key={comp.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <a href={`/learnmore/${comp.id}?query=${comp.name}`}>
              <img
                src={comp.image_url}
                alt={comp.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{comp.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {comp.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {comp.price * 2}
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

export default Computing
