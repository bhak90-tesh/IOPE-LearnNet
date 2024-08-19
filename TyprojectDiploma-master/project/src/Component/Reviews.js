import React from 'react';
import r1 from "./images/girl.webp";
import r2 from "./images/boy.jpg" ;
import r3 from "./images/boy1.jpg" ;
import r4 from "./images/boy4.jpeg";
import r5 from "./images/girld.jpg";
import r6 from "./images/7bv.jpg";
const Reviews = () => {
    return (
        <section className="review" id="review">
            <section className="teacher" id="teacher">
                <h1 className="heading">our Reviews</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={r2}alt="Aarush Singhania" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Aarush Singhania</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={r1} alt="Sujata Desai" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Sujata Desai</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={r3} alt="Abhimanyu Saraf" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Abhimanyu Saraf</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={r4} alt="ShriHari Kumar" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>ShriHari Kumar</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={r5} alt="Hiteshri Kulkarni" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Hiteshri Kulkarni</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={r6} alt="Akarshan Velu" />
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Akarshan Velu</h3>
                            <span>Student</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Reviews;
