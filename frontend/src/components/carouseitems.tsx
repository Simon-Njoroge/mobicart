import React from "react";
interface CarouselItemProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  }
  
  const CarouselItem: React.FC<CarouselItemProps> = ({ imageSrc, altText, title, description }) => {
    return (
      <div className="carousel-item">
        <img src={imageSrc} alt={altText} className="w-full" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-lg font-bold text-white">{title}</h5>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CarouselItem;
  