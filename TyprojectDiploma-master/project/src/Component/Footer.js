import React from 'react';
 // Make sure to import your CSS file

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>find us here</h3>
          <p> Dr. Babasaheb Ambedkar Technological University, Lonere Vidyavihar, Lonere,Maharashtra</p>
          <div className="share">
            <a href="https://www.facebook.com/iope.lonere" className="fab fa-facebook-f"></a>
            <a href="https://www.instagram.com/it_iope_lonere/" className="fab fa-twitter"></a>
            <a href="https://www.instagram.com/it_iope_lonere/" className="fab fa-instagram"></a>
            <a href="https://www.linkedin.com/groups/43633/" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <p>+91 9307757446</p>
          <p>+91 7260408457</p>
          <a href="#" className="link">iopelonere59@gmail.com</a>
        </div>

        <div className="box">
          <h3>localization</h3>
          <p>
            Institute of Petrochemical Engineering (IOPE)
            Dr. Babasaheb Ambedkar Technological University (DBATU)
            Vidyavihar, Lonere
            Mangaon, Raigad
            Maharashtra, 402103
            India
          </p>
        </div>
      </div>
      <div className="credit">created by <span>SA Developers </span>| all rights are reserved!</div>
    </section>
  );
};

export default Footer;
