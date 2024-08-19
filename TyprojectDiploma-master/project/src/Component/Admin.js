import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data);
      } catch (error) {
        setMessage('Access denied');
      }
    };
    fetchData();
  }, []);

  return <h2>{message}</h2>;
};

export default Admin;
