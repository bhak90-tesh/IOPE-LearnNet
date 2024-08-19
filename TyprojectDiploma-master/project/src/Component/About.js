import React from 'react';
import a1 from "./images/ashutosh.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">About Us</h1>
      <div className="container">
        <figure className="about-image">
          <img src={a1} alt="Ashutosh" height="500" />
        </figure>
        <div className="about-content">
          <h3>Revolutionizing Diploma Education</h3>
          <p>
            Welcome to our premier platform for diploma students, offering
            comprehensive notes and resources. Our team of skilled full-stack
            developers ensures a user-friendly, reliable, and secure
            experience. We are dedicated to enhancing learning through
            cutting-edge technology and continuous innovation. Join us to
            access top-notch educational materials and achieve academic
            excellence.
          </p>
          <a href="#" className="btn">
            <span className="text text-1">read more</span>
            <span className="text text-2" aria-hidden="true">
              read more
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
