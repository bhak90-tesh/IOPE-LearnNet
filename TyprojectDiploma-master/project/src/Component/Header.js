// import React from 'react';
// import { Link } from 'react-router-dom';
  
// const Header = () => {
//   return (
//     <header className="header">
//       <a href="#" className="logo"><i className="fas fa-book"></i> Welcome Learners</a>
//       <nav className="navbar">
//       <Link to="/" className="hover-underline">home</Link>
//       <Link to="/course" className="hover-underline">Courses</Link>
//          <Link to="/teacher" className="hover-underline">Teachers</Link>
//          <Link to="/review" className="hover-underline">Review</Link>
//          <Link to="/about" className="hover-underline">About</Link>
//          <Link to="/contact" className="hover-underline">Contact</Link>     
//         <Link to="/login" className="hover-underline">Login</Link>
//        {/* <Link to="/adminsignup" className="hover-underline">AdminSignUp</Link>*/}
//       </nav>
//     </header>
//   );
// }

// export default Header;

// src/components/Header.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  function logout()
{
  localStorage.clear();
  navigate('/login');
}

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-book"></i> Welcome Learners
      </a>
      <nav className="navbar">
        <Link to="/" className="hover-underline">Home</Link>
        <Link to="/course" className="hover-underline">Courses</Link>
        <Link to="/teacher" className="hover-underline">Teachers</Link>
        <Link to="/review" className="hover-underline">Review</Link>
        <Link to="/about" className="hover-underline">About</Link>
        <Link to="/contact" className="hover-underline">Contact</Link>
        <Link to="/adminsignup" className="hover-underline">AdminSignUp</Link>
        {!user ? (
          <Link to="/login" className="hover-underline">Login</Link>
        ) : (
          <button onClick={logout} className="logout-button">Logout</button>


        )}
      </nav>
    </header>
  );
};

export default Header;

