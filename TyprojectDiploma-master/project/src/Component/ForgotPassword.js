// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const { id, token } = useParams();
//   const navigate = useNavigate();
//   const BASE_URL = 'http://localhost:5000';  // Ensure this is correct

//   useEffect(() => {
//     const verifyToken = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/forgot/${id}/${token}`);
//         if (response.data.isValid) {
//           setIsValid(true);
//         } else {
//           setMessage('Invalid or expired token.');
//         }
//       } catch (error) {
//         setMessage('An error occurred. Please try again.');
//       }
//     };

//     verifyToken();
//   }, [id, token]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post(`${BASE_URL}/reset/${id}/${token}`, { password });
//       if (response.status === 201) {
//         setMessage('Password reset successfully. You can now log in.');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setMessage(response.data.message);
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <div className="card1" style={{ marginTop: '100px' }}>
//         <h2>Reset Your Password</h2>
//         {message && <p>{message}</p>}
//         {isValid && (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="passInput"
//               placeholder="New Password"
//               required
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="passInput"
//               placeholder="Confirm Password"
//               required
//             />
//             <button type="submit">Set New Password</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const { id, token } = useParams();
//   const navigate = useNavigate();
//   const BASE_URL = 'http://localhost:5000';  // Ensure this is correct

//   useEffect(() => {
//     const verifyToken = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/forgot/${id}/${token}`);
//         console.log('Verify Token Response:', response);  // Logging for debugging

//         if (response.data.isValid) {
//           setIsValid(true);
//         } else {
//           setMessage('Invalid or expired token.');
//         }
//       } catch (error) {
//         console.error('Error:', error);  // Logging errors
//         setMessage('An error occurred. Please try again.');
//       }
//     };

//     verifyToken();
//   }, [id, token]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post(`${BASE_URL}/reset/${id}/${token}`, { password });
//       console.log('Reset Password Response:', response);  // Logging for debugging

//       if (response.status === 201) {
//         setMessage('Password reset successfully. You can now log in.');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);  // Logging errors
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <div className="card1" style={{ marginTop: '100px' }}>
//         <h2>Reset Your Password</h2>
//         {message && <p>{message}</p>}
//         {isValid && (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="passInput"
//               placeholder="New Password"
//               required
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="passInput"
//               placeholder="Confirm Password"
//               required
//             />
//             <button type="submit">Set New Password</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { id, token } = useParams();
  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:5000';  // Ensure this is correct

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/forgot/${id}/${token}`);
        console.log('Verify Token Response:', response);  // Logging for debugging

        if (response.data.isValid) {
          setIsValid(true);
        } else {
          setMessage('Invalid or expired token.');
        }
      } catch (error) {
        console.error('Error:', error);  // Logging errors
        setMessage('An error occurred. Please try again.');
      }
    };

    verifyToken();
  }, [id, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/reset/${id}/${token}`, { password });
      console.log('Reset Password Response:', response);  // Logging for debugging

      if (response.status === 201) {
        setMessage('Password reset successfully. You can now log in.');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);  // Logging errors
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="card1">
        <h2 className="forgot-password-card-header">Reset Your Password</h2>
        {message && <p className="forgot-password-message">{message}</p>}
        {isValid && (
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="passInput"
              placeholder="New Password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="passInput"
              placeholder="Confirm Password"
              required
            />
            <button type="submit" className="forgot-password-submit-btn">Set New Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

