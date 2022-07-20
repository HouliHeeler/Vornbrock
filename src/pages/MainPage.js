import React from 'react';

  
const MainPage = () => {
  return (
    <div className='mainDiv'>
      <section>
        <img className='mainImages' src={process.env.PUBLIC_URL + '/images/transfer/mainimages/homeheading.jpg'} alt='decorative art'></img>
        <section className='homeHeader'>
          <h3 style={{fontSize:'2.5rem',fontWeight:'lighter', margin:'2.5rem 1.25rem .6rem 0', padding:'0 1.875rem'}}>R.Vornbrock</h3>
          <h1 style={{fontSize:'3.75rem',fontWeight:'lighter', margin:'0 1.25rem 13rem 0', padding:'0 1.875rem'}}>Interior Design</h1>
          <h4 style={{fontSize:'1.25rem',fontWeight:'600', margin:'0', padding:'.6rem 1.875rem'}}>Space Planning</h4>
          <h4 style={{fontSize:'1.25rem',fontWeight:'600', margin:'0', padding:'.6rem 1.875rem'}}>Conceptual Design</h4>
          <h4 style={{fontSize:'1.25rem',fontWeight:'600', margin:'0', padding:'.6rem 1.875rem'}}>Construction Documentation</h4>
          <h4 style={{fontSize:'1.25rem',fontWeight:'600', margin:'0', padding:'.6rem 1.875rem'}}>Contract Admin</h4>
        </section>
      </section>
      <section className='mainBlurb'>
        <p>
        Focusing on commercial and hospitality design, R. Vornbrock &amp; Associates provides a full range of interior design services to its clients. Equally at home in the creative and technical fields, the firm is well versed in creating and executing custom design concepts for their clients. The firm also offers technical and drafting services to translate pre-existing designs into the built environment.
        </p>
      </section>
    </div>
  );
};

export default MainPage
  
