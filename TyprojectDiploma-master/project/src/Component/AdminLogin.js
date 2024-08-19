import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './AdminLogin.css'; // Import the CSS file for AdminLogin

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://127.0.0.1:5000/api/admin/adminlogin', { username, password });
      localStorage.setItem('token', data.token);
      navigate('/choose');
    } catch (error) {
      console.error('Error:', error);
      alert("Please Enter Correct Password or Email")
      console.log('Request data:', { username, password });  // Log the data being sent
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-login-form">
      <h2 className="admin-login-heading">Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="admin-login-input"
        id="admin-username"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="admin-login-input"
        id="admin-password"
      />
      <button type="submit" className="admin-login-button" id="admin-login-button">Login</button>
    </form>
  );
}

export default AdminLogin;
