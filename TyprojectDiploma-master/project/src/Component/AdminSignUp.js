import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
//import './AdminSignUp.css';  // Import the CSS file for AdminSignUp

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    securityCode: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/adminsignup', formData);
      console.log(response.data);
      navigate('/adminlogin');
    } catch (error) {
      console.error('Error:', error);
      console.log('Request data:', formData);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <div className="admin-signup-container">
      <form onSubmit={handleSubmit} className="admin-signup-form">
        <h2 className="admin-signup-heading">Admin Sign Up</h2>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="admin-signup-input"
          id="admin-username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="admin-signup-input"
          id="admin-password"
        />
        <input
          type="text"
          name="securityCode"
          value={formData.securityCode}
          onChange={handleChange}
          placeholder="Security Code"
          className="admin-signup-input"
          id="admin-security-code"
        />
        <button type="submit" className="admin-signup-button" id="admin-signup-button">Sign Up</button>
        <p className="admin-signup-footer">
          Already have an account? <Link to="/adminlogin" className="admin-signup-login-link">Log In</Link>
        </p>
        <Link to="/reset" style={{marginLeft:'120px',color:'blue',fontSize:'15px'}}>Forgot Password?</Link>
      </form>
    </div>
  );
};

export default AdminSignUp;
