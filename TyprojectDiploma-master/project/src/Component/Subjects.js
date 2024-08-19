import React from 'react';
import s1 from './images/subject-1.png';
import s2 from './images/subject-2.png';
import s3 from './images/subject-3.png';
import s4 from './images/subject-4.png';


const Subjects = () => {
  return (
    <section className="subjects" id="subjects">
      <h1 className="heading">Our Popular Subjects</h1>
      <div className="box-container">
        <div className="box">
          <img src={s1} alt="Subject 1" />
          <a href="https://www.geeksforgeeks.org/fullstack-web-development/"><h3>FullStack Web Development</h3></a>
          <p>Fun & challenging</p>
        </div>
        <div className="box">
          <img src={s2} alt="Subject 2" />
          <a href="https://www.javatpoint.com/java-tutorial"><h3>Java</h3></a>
          <p>Fun & challenging</p>
        </div>
        <div className="box">
          <img src={s3} alt="Subject 3" />
          <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/"><h3>Data Structures & Algorithms</h3></a>
          <p>Fun & challenging</p>
        </div>
        <div className="box">
          <img src={s4} alt="Subject 4" />
          <h3>C/C++</h3>
          <p>Fun & challenging</p>
        </div>
      </div>
    </section>
  );
}

export default Subjects;
