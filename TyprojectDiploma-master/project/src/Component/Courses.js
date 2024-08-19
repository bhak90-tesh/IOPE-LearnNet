import React from 'react';
import s1 from './images/blog-1.jpg';
import s2 from './images/blog-2.jpg';
import s3 from './images/blog-3.jpg';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <section className="blog" id="blog">
      <h1 className="heading">our Courses</h1>
      <div className="box-container">
        <div className="box">
          <div className="image shine">
            <img src={s1} alt="" />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <h3>we have best courses for you</h3>
            <p>Explore comprehensive Semester 1 and Semester 2 notes to build a strong foundation in your academic journey, ensuring a deep understanding of fundamental and advanced concepts.</p>
          </div>
        </div>
        <div className="box">
          <div className="image shine">
            <img src={s2} alt="" />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <h3>we have best courses for you</h3>
            <p>Explore comprehensive Semester 3 and Semester 4 notes to build a strong foundation in your academic journey, ensuring a deep understanding of fundamental and advanced concepts.</p>
          </div>
        </div>
        <div className="box">
          <div className="image shine">
            <img src={s3} alt="" />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <h3>we have best courses for you</h3>
            <p>Explore comprehensive Semester 5 and Semester 6 notes to build a strong foundation in your academic journey, ensuring a deep understanding of fundamental and advanced concepts.</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/files" className="btn outside-btn">
          <span className="text text-1">Explore Notes</span>
          <span className="text text-2" aria-hidden="true">Explore Notes</span>
        </Link>
      </div>
    </section>
  );
}

export default Courses;
