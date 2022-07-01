import React, { useState } from "react";

const CarouselThree = () => {

  const [slides] = useState([
      {
        source: "/images/waltergage1.JPG",
        title: "Walter Gage Residences(1)",
      },
      {
        source: "/images/waltergage2.JPG",
        title: "Walter Gage Residences(2)",
      },
      {
        source: "/images/waltergage3.JPG",
        title: "Walter Gage Residences(3)",
      },
      {
        source: "/images/waltergage4.JPG",
        title: "Walter Gage Residences(4)",
      },
      {
        source: "/images/waltergage5.JPG",
        title: "Walter Gage Residences(5)",
      },
  ]);

  // SET CAROUSEL DEFAULTS
  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  const nextImage = () => {
      currentPosition !== slides.length -1 ? // Check index length
      setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
      currentSlide = slides[currentPosition];
  }

  return (
    <div>
        <img onClick={nextImage} className="workImages" src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title}/>
    </div>
)
}

export default CarouselThree