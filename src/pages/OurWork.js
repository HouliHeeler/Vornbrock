import React from "react"
import Carousel from "../components/carousel"
import CarouselTwo from "../components/carousel2"
import CarouselThree from "../components/carousel3"
import CarouselFour from "../components/carousel4"
  
const OurWork = () => {
  return (
    <div className='mainDiv'>
      <section>
        <img className='mainImages' src={process.env.PUBLIC_URL + '/images/transfer/mainimages/workheading.jpg'} alt='decorative art'></img>
        <h1 className='workHeader'>Our Work</h1>
      </section>
      <section className='workInfo'>
        <section className='siteDisplay'>
          <Carousel />
          <span>McDonalds, Alberta</span>
        </section>
        <section className='siteDisplay'>
          <CarouselTwo />
          <span>Childcare Centre, Vancouver</span>
        </section>
        <section className='siteDisplay'>
          <CarouselThree />
          <span>Walter Gage Residences, UBC</span>
        </section>
        <section className='siteDisplay'>
          <CarouselFour />
          <span>McDonalds, Manitoba</span>
        </section>
      </section>
    </div>
  );
};

export default OurWork
  
