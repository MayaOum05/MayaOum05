import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/img1.jpg",
  "/img.4.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery">
      <button className="arrow left" onClick={prevSlide}>❮</button>
      
      <img 
        src={images[index]} 
        alt={`Slide ${index + 1}`} 
        className="gallery-img"
      />
      
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}
