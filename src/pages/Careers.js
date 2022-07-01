import React from 'react';
  
const Careers = () => {
  return (
    <div class='mainDiv'>
      <section>
        <img class='mainImages' src={process.env.PUBLIC_URL + '/images/careersHeading.jpg'}></img>
        <h1 class='careerHeader'>Careers</h1>
      </section>
      <section class='careerInfo'>
        <h2>We are hiring</h2>
        <p>
        R. Vornbrock is committed to creating a supportive atmosphere that facilitates growth in its team members. We firmly believe in work-life balance and an inclusive and respectful workplace. In-office, semi-remote, and remote positions are available.
        </p>
        <h2>Intermediate Commercial Interior Designer</h2>
        <span>Minimum Level of Experience:</span>
        <ul>
          <li>3-5 years of post-graduate experience as a commercial interior designe</li>
          <li>Education from an accredited institution in Interior Design</li>
          <li>Strong AutoCAD skills &amp; software knowledge, including sketchUp and Microsoft Office</li>
          <li>Strong understanding of Interior Design and Construction detailing, as well as building codes </li>
          <li>Extensive knowledge of materials, specifications, and equipment</li>
          <li>Strong organizational skills</li>
          <li>Attention to detail</li>
          <li>Excellent communication &amp; listening skills</li>
          <li>Ability to adapt to a fast-paced environment</li>
        </ul>
        <h2>Interior Design AutoCAD Technician</h2>
        <span>Minimum Level of Experience:</span>
        <ul>
          <li>2 years of post-graduate experience as an AutoCAD Technician in the architecture or interior design field</li>
          <li>Education from an accredited institution in a related field</li>
          <li>Strong AutoCAD skills &amp; software knowledge, including Microsoft Office</li>
          <li>Strong understanding of Interior Design and Construction detailing</li>
          <li>Strong organizational skills</li>
          <li>Attention to detail</li>
          <li>Excellent communication &amp; listening skills</li>
          <li>Ability to adapt to a fast-paced environment</li>
        </ul>
        <span class='careerNote'>Please forward resumes and pdf portfolios to: <a href="mailto:kate@vornbrock.com">kate@vornbrock.com</a></span>
        <span class='careerNote'>Please note that only those selected for an interview will be contacted.</span>
      </section>
    </div>
  );
};

export default Careers
  
