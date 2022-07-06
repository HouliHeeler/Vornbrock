import React, { useState } from "react";

const CarouselFour = () => {

  const [slides] = useState([
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB1.jpg",
        title: "McDonald's Manitoba(1)",
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB2.jpg",
        title: "McDonald's Manitoba(2)"
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB3.jpg",
        title: "McDonald's Manitoba(3)"
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB4.jpg",
        title: "McDonald's Manitoba()"
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB5.jpg",
        title: "McDonald's Manitoba(5)"
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB6.jpg",
        title: "McDonald's Manitoba(6)"
      },
      {
        source: "/images/transfer/mcdonaldsMB/mcdonaldsMB7.jpg",
        title: "McDonald's Manitoba(7)"
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

export default CarouselFour