import React from 'react'
import header from './header'
import CarouselItem from "./carouseitems";
const Home = () => {
    return (
        <>
            {/* slider */}
            <div className="carousel">
      <CarouselItem
        imageSrc="/path/to/image1.jpg"
        altText="First slide"
        title="First Slide Title"
        description="This is the description for the first slide."
      />
      <CarouselItem
        imageSrc="/path/to/image2.jpg"
        altText="Second slide"
        title="Second Slide Title"
        description="This is the description for the second slide."
      />
      {/* Add more CarouselItem components as needed */}
    </div>
        </>
    )
}
export default Home