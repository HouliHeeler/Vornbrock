import React from 'react';

  
const MainPage = () => {
  return (
    <div class='mainDiv'>
      <section>
      <img class='mainImages' src={process.env.PUBLIC_URL + '/images/transfer/mainimages/homeheading.jpg'} alt="decorative art"></img>
        <section className='homeHeader'>
          <h3 style={{fontSize:'40px',fontWeight:'lighter', margin:'40px 20px 10px 0', padding:'0 30px'}}>R.Vornbrock</h3>
          <h1 style={{fontSize:'60px',fontWeight:'lighter', margin:'0 20px 300px 0', padding:'0 30px'}}>Interior Design</h1>
          <h4 style={{fontSize:'20px',fontWeight:'600', margin:'0', padding:'10px 30px'}}>Space Planning</h4>
          <h4 style={{fontSize:'20px',fontWeight:'600', margin:'0', padding:'10px 30px'}}>Conceptual Design</h4>
          <h4 style={{fontSize:'20px',fontWeight:'600', margin:'0', padding:'10px 30px'}}>Construction Documentation</h4>
          <h4 style={{fontSize:'20px',fontWeight:'600', margin:'0', padding:'10px 30px'}}>Contract Admin</h4>
        </section>
      </section>
      <section class='mainBlurb'>
        <p>
        Focusing on commercial and hospitality design, R. Vornbrock &amp; Associates provides a full range of interior design services to its clients. Equally at home in the creative and technical fields, the firm is well versed in creating and executing custom design concepts for their clients. The firm also offers technical and drafting services to translate pre-existing designs into the built environment.
        </p>
      </section>
    </div>
  );
};

export default MainPage
  
