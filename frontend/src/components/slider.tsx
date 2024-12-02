import React, { useState, useEffect } from 'react';
import { backend_url } from './home';
import axios from 'axios';
import { Tproduct } from './alltypes';
import { MoonLoader } from 'react-spinners';

function Slider() {
  const [sliders, setSliders] = useState<Tproduct[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchSlider = async () => {
    try {
      const response = await axios.get(`${backend_url}/all/slider/`);
      setSliders(response.data);
    } catch (error) {
      console.error('Fetching failed', error);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, [sliders]);

  // Handlers for arrows
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  return (
    <div className="relative w-full  max-w-4xl mx-auto overflow-hidden">
      {sliders.length > 0 ? (
        <div className="relative">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${sliders.length * 100}%`,
            }}
          >
            {sliders.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full"
                style={{ width: '100%' }}
              >
                <img
                  src={slide.image_url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            onClick={goToPrevious}
          >
            &#9664;
          </button>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            onClick={goToNext}
          >
            &#9654;
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <MoonLoader />
        </div>
      )}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliders.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
