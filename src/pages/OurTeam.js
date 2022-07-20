import React from 'react';
  
const OurTeam = () => {
  return (
    <div class='mainDiv'>
      <section>
        <img class='mainImages' src={process.env.PUBLIC_URL + '/images/transfer/mainimages/teamheading.jpg'} alt="decorative art"></img>
        <h1 class ='teamHeader'>Our Team</h1>
      </section>
      <section class='teamInfo'>
        <section class='teamMember'>
          <img class='teamImages' src={process.env.PUBLIC_URL + '/images/transfer/ourteam/kate.jpg'} alt='Kate Bailey'></img>
          <section class='teamBlurb'>
            <h4>Kate Bailey, Principal</h4>
            <p>Principal of R. Vornbrock &amp; Associates since 2018, Kate worked extensively with company founder Ron Vornbrock prior to his retirement. Kate has built upon the foundation of excellence that Ron laid at the company’s start in 1982, forging a cohesive team that creates inspired spaces. Hallmarks of Kate’s design are spatial awareness, thoughtfulness, and attention to detail.</p>
          </section>
        </section>
        <section class='teamMember'>
          <img class='teamImages' src={process.env.PUBLIC_URL + '/images/transfer/ourteam/june.jpg'} alt='June Kim'></img>
          <section class='teamBlurb'>
            <h4>June Kim, Senior Interior Designer</h4>
            <p>A graduate of BCIT’s Diploma of Interior Design program, June’s combined background of technology, estimating, and interior design has helped her cultivate a robust design aesthetic and excellent problem-solving skills. A model of efficiency, June produces the best solution for the space at hand, without sacrificing form to function.</p>
          </section>
        </section>
        <section class='teamMember'>
          <img class='teamImages' src={process.env.PUBLIC_URL + '/images/transfer/ourteam/paula.jpg'} alt='Paula Costa'></img>
          <section class='teamBlurb'>
            <h4>Paula Costa, Interior Designer</h4>
            <p>After graduating with a Bachelor’s in Architecture and Urbanism from UniCEUB, Paula went on to achieve a postgraduate degree in Construction Management at IPOG. Paula left her home in Brasil to pursue her education in Canada, shifting focus to Interior Design. Since joining the team at R. Vornbrock in 2017, Paula’s commitment to excellence has been reflected in the high caliber of her work.</p>
          </section>
        </section>
        <section class='teamMember'>
          <img class='teamImages' src={process.env.PUBLIC_URL + '/images/transfer/ourteam/breanne.jpg'} alt='Breanne DeVita'></img>
          <section class='teamBlurb'>
            <h4>Breanne DeVita, Interior Designer</h4>
            <p>The newest edition to our team, Breanne graduated from BCIT’s Interior Design program with a Diploma of Interior Design and began her career focusing on a combination of design and project management. An excellent communicator, Breanne loves meeting new people. She excels at building meaningful relationships with clients, coworkers, and tradespeople.</p>
          </section>
        </section>
      </section>
    </div>
    
  );
};
  
export default OurTeam