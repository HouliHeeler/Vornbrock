import React from "react";
  
const OurWork = () => {
  return (
    <div class='mainDiv'>
      <section>
        <img class='mainImages' src={process.env.PUBLIC_URL + '/images/workHeading.jpg'} alt="decorative art"></img>
        <h1 class='workHeader'>Our Work</h1>
      </section>
      <section class='workInfo'>
        <section class='siteDisplay'>
          <img class='workImages' src={process.env.PUBLIC_URL + '/images/mcdonaldsAB1.jpg'} alt="McDonald's, Alberta"></img>
          <span>McDonalds, Alberta</span>
        </section>
        <section class='siteDisplay'>
          <img class='workImages' src={process.env.PUBLIC_URL + '/images/childcare1.jpg'} alt="Childcare Centre, Vancouver"></img>
          <span>Childcare Centre, Vancouver</span>
        </section>
        <section class='siteDisplay'>
          <img class='workImages' src={process.env.PUBLIC_URL + '/images/waltergage1.JPG'} alt="Walter Gage Residences, UBC"></img>
          <span>Walter Gage Residences, UBC</span>
        </section>
        <section class='siteDisplay'>
          <img class='workImages' src={process.env.PUBLIC_URL + '/images/mcdonaldsMB1.jpg'} alt="McDonald's, Manitoba"></img>
          <span>McDonalds, Manitoba</span>
        </section>
      </section>
    </div>
  );
};

export default OurWork
  
