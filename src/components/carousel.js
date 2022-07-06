import React, { useState } from "react";

const Carousel = () => {

  const [slides] = useState([
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB1.jpg",
        title: "McDonald's Alberta(1)",
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB2.jpg",
        title: "McDonald's Alberta(2)"
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB3.jpg",
        title: "McDonald's Alberta(3)"
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB4.jpg",
        title: "McDonald's Alberta()"
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB5.jpg",
        title: "McDonald's Alberta(5)"
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB6.jpg",
        title: "McDonald's Alberta(6)"
      },
      {
        source: "/images/transfer/mcdonaldsAB/mcdonaldsAB7.jpg",
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