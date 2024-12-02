import React,{useEffect,useState}from 'react'
import { backend_url } from './home'
import { Tproduct } from './alltypes'
import axios from 'axios'
import {MoonLoader} from 'react-spinners'
function Office() {
    const [office, setOffice] = useState<Tproduct[]>([])
    const fetchOffice = async () => {
        try {
            const response = await axios.get(`${backend_url}/all/office/`)
            setOffice(response.data)
        }
        catch (error) {
            console.error("fetching failed", error)
        }
    }
    useEffect(() => {
        fetchOffice()
    }, [])
  return (
    <div>
       <div className="container mx-auto p-4">
      {office.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {office.map((off) => (
            <div
              key={off.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
               <a href={`/learnmore/${off.id}`}>
              <img
                src={off.image_url}
                alt={off.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{off.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {off.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {off.price * 2}
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

export default Office
