import React ,{useEffect,useState}from 'react'
import { backend_url } from './home'
import { Tproduct } from './alltypes'
import axios from 'axios'
import {MoonLoader} from 'react-spinners'
function Tvs() {
    const [tvs, setTvs] = useState<Tproduct[]>([])
    const fetchtvs = async () => {
        try {
            const response = await axios.get(`${backend_url}/all/tvs/`)
            setTvs(response.data)
        }
        catch (error) {
            console.error("fetching failed", error)
        }
    }
    useEffect(() => {
        fetchtvs()
    }, [])
  return (
    <div className="container mx-auto p-4">
      {tvs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tvs.map((tv) => (
            <div
              key={tv.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
               <a href={`/learnmore/${tv.id}?query=${tv.name}`}>
              <img
                src={tv.image_url}
                alt={tv.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{tv.name}</h1>
                <p className="text-lg font-bold text-green-600">Ksh {tv.price}</p>
                <p className="text-sm line-through text-gray-400">
                  Ksh {tv.price * 2}
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
        )
      
    
  
}

export default Tvs
