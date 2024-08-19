import React from 'react';
import Subjects from './Subjects';
import Courses from './Courses';
import Teachers from './Teachers';
import Reviews from './Reviews';
import About from './About';
import Footer from './Footer';
import './css/style.css';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section className="home" id="home">
      <div className="content">
  <a href="https://diploma.dbatu.ac.in/" className="link-heading">
    <h3>The Institute of Petrochemical Engineering, Lonere</h3>
  </a>
  <p>
    Empowering future leaders in engineering. Discover cutting-edge research and world-class education.
    Join us in shaping the innovations of tomorrow.
  </p>
  <a href="https://diploma.dbatu.ac.in/" className="">
   
  </a>
</div>

      </section>

      <Subjects/>
      <Courses/>
<Teachers/>
<Reviews/>
<About/>
<Contact/>
<Footer/>

      {/* Add other sections here with corresponding IDs */}
    </>
  );
}

export default Home;
