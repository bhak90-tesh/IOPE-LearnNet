import React from 'react';
import t1 from './images/sandeep.jpg';
import t2 from "./images/pranali.jpg";
import t3 from "./images/samidha.jpg";

const Teachers = () => {
  return (
    <section className="teacher" id="teacher">
      <h1 className="heading">our expert teacher</h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={t1} alt="" />
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="content">
            <h3>Sandeep M.Gaikwad</h3>
            <span>Email : <br />smgaikwad@dbatu.ac.in</span><br />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={t2} alt="" />
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="content">
            <h3>pranali Bhosle</h3>
            <span>Email: <br />pranalibhosale62628@gmail.com</span>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={t3} alt="" />
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="content">
            <h3>Samidha Jadhav</h3>
            <span>Email: <br /> samidhasunil123@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
