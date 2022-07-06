import React from "react";
import Carousel from "../components/carousel"
import CarouselTwo from "../components/carousel2"
import CarouselThree from "../components/carousel3";
import CarouselFour from "../components/carousel4";
  
const OurWork = () => {
  return (
    <div class='mainDiv'>
      <section>
        <img class='mainImages' src={process.env.PUBLIC_URL + '/images/transfer/mainimages/workheading.jpg'} alt="decorative art"></img>
        <h1 class='workHeader'>Our Work</h1>
      </section>
      <section class='workInfo'>
        <section class='siteDisplay'>
          <Carousel />
          <span>McDonalds, Alberta</span>
        </section>
        <section class='siteDisplay'>
          <CarouselTwo />
          <span>Childcare Centre, Vancouver</span>
        </section>
        <section class='siteDisplay'>
          <CarouselThree />
          <span>Walter Gage Residences, UBC</span>
        </section>
        <section class='siteDisplay'>
          <CarouselFour />
          <span>McDonalds, Manitoba</span>
        </section>
      </section>
    </div>
  );
};

export default OurWork
  
