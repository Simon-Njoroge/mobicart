import React, { useState, useEffect } from 'react';
import HomeContainer from '../containers/HomeContainer';
import { MoonLoader } from 'react-spinners';  

function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []);  
  

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen gap-2">
          <MoonLoader size={60} color="#FF6347" />
          <p className='text-blue-700'>Loading Mobicart.....</p>
        </div>
      ) : (
       
        <HomeContainer />
      )}
    </div>
  );
}

export default Homepage;
