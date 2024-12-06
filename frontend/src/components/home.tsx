import React, { useEffect, useState } from 'react'
import header from './header'
import CarouselItem from "./carouseitems";
import axios from 'axios';
import Slider from './slider';
export const backend_url = 'http://127.0.0.1:8000/api'
import Phones from './phones';
import Tvs from './tvs';
import Appliances from './appliances';
import Health from './health';
import Office from './office';
import Fashion from './fashion';
import Computing from './computing';
import Super from './super';
import Baby from './baby';
import Footer from './footer';
const Home = () => {
  const [all, setAll] = useState<any[]>([])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/all/products')
      setAll(response.data)
    }
    catch (error) {
      console.error("failed to fetch", error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(all)
  return (
    <>
      {/* slider */}
      <Slider />

      {/* Phones Section */}
      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Phones & Tablets</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Phones />
        </div>
      </div>

      {/* tvs Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Tvs & Sound</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Tvs />
        </div>
      </div>


      {/* appliances Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Appliances</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Appliances />
        </div>
      </div>

      {/* Health and Beauty Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Health & Beauty</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Health />
        </div>
      </div>
      {/* Home & office Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Home & office</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Office />
        </div>
      </div>

      {/* fashion Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Fashion</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Fashion />
        </div>
      </div>

      {/* computing Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Computing</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Computing />
        </div>
      </div>

      {/* Supermarket Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Supermarket</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Super />
        </div>
      </div>

      {/* Baby Products Section */}

      <div className="rounded-md w-full mt-5">

        <div className="container mx-auto p-4 flex items-center bg-orange-600 text-white rounded-t-md">
          <div>
            <p className="text-lg font-semibold">Baby Products</p>
          </div>
          <div className="ml-auto">
            <a
              href="#"
              className="text-sm font-medium underline hover:text-orange-200 transition"
            >
              See all
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-b-md">
          <Baby />
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </>
  )
}
export default Home