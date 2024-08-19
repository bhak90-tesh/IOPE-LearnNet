import React from 'react';
import c1 from "./images/contact.png";
import './css/style.css';
const Contact = () => {
    return (
        <section className="contact" id="contact" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 className="heading">contact us</h1>
          <img src={c1} style={{ width: '70%' }} alt="Contact Us" />
        </div>
        <div style={{ flex: 1, textAlign: 'center', marginRight: '100px' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQDp_tO567dyokCG2JYVuJse_tddHZao4HTo7xggmROv8HRg/viewform?usp=pp_url"
            width="100%"
            height="450"
            title="Contact Form"
            style={{ border: 'none' }}
          >
            Loading...
          </iframe>
        </div>
      </section>
    
    );
};

export default Contact;
