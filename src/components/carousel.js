import React, { useState } from "react";

const Carousel = () => {

  const [slides] = useState([
      {
        source: "/images/mcdonaldsAB1.jpg",
        title: "McDonald's Alberta(1)",
      },
      {
        source: "/images/mcdonaldsAB2.jpg",
        title: "McDonald's Alberta(2)"
      },
      {
        source: "/images/mcdonaldsAB3.jpg",
        title: "McDonald's Alberta(3)"
      },
      {
        source: "/images/mcdonaldsAB4.jpg",
        title: "McDonald's Alberta()"
      },
      {
        source: "/images/mcdonaldsAB5.jpg",
        title: "McDonald's Alberta(5)"
      },
      {
        source: "/images/mcdonaldsAB6.jpg",
        title: "McDonald's Alberta(6)"
      },
      {
        source: "/images/mcdonaldsAB7.jpg",
        title: "McDonald's Alberta(7)"
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

export default Carousel