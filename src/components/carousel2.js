import React, { useState } from "react";

const CarouselTwo = () => {

  const [slides] = useState([
      {
        source: "/images/transfer/childcare/childcare1.jpg",
        title: "Vancouver Childcare Center(1)",
      },
      {
        source: "/images/transfer/childcare/childcare2.jpg",
        title: "Vancouver Childcare Center(2)",
      },
      {
        source: "/images/transfer/childcare/childcare3.jpg",
        title: "Vancouver Childcare Center(3)",
      },
      {
        source: "/images/transfer/childcare/childcare4.jpg",
        title: "Vancouver Childcare Center(4)",
      },
      {
        source: "/images/transfer/childcare/childcare5.jpg",
        title: "Vancouver Childcare Center(5)",
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

export default CarouselTwo