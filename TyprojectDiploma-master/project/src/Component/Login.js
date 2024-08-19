// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const auth = localStorage.getItem('user');
// //     if (auth) {
// //       navigate('/login');
// //     }
// //   }, [navigate]);

// //   const handleLogin = async () => {
// //     console.warn(email, password);
// //     let result = await fetch("http://localhost:5000/login", {
// //       method: 'post',
// //       body: JSON.stringify({ email, password }),
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     });

// //     result = await result.json();
// //     console.warn(result);
// //     if (result.auth) {
// //       localStorage.setItem('user', JSON.stringify(result.user));
// //       localStorage.setItem('token', JSON.stringify(result.auth));
// //       navigate('/files');
// //     } else {
// //       alert("Please enter correct information");
// //     }
// //   }

// //   return (
// //     <div className="container-login">
// //       <div className="card-login">
// //         <div className="card-title-login">
// //           <h1>Login</h1>
// //         </div>
// //         <div className="form-login">
// //           <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-login" className="form-control form-control-login" />
// //           <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password-login" className="form-control form-control-login" />
// //           <div className="form-buttons-login">
// //             <button onClick={handleLogin} className="btn btn-primary btn-login">Login</button>
// //             {/* <Link to="/signup" className="btn btn-link btn-link-login">Create Account</Link> */}
// //           </div>
// //           <Link to="/reset" className=" btn-link btn-link-login">Forgot Password?</Link>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//       navigate('/files');
//     }
//   }, [navigate]);

//   const handleLogin = async (event) => {
//     event.preventDefault();  // Prevent form from submitting the default way

//     try {
//       let result = await fetch("http://localhost:5000/login", {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       result = await result.json();
//       console.log('Login Response:', result);  // Logging for debugging

//       if (result.auth) {
//         localStorage.setItem('user', JSON.stringify(result.user));  // Save user data
//         localStorage.setItem('token', JSON.stringify(result.auth));  // Save token
//         navigate('/files');  // Redirect to /files after successful login
//       } else {
//         setMessage(result.result);  // Display error message
//       }
//     } catch (error) {
//       console.error('Login Error:', error);  // Logging errors
//       setMessage('An error occurred. Please try again.');  // Display general error message
//     }
//   };

//   return (
//     <div className="container-login">
//       <div className="card-login">
//         <div className="card-title-login">
//           <h1>Login</h1>
//         </div>
//         <div className="form-login">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email-login"
//             className="form-control form-control-login"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="password-login"
//             className="form-control form-control-login"
//           />
//           <div className="form-buttons-login">
//             <button onClick={handleLogin} className="btn btn-primary btn-login">
//               Login
//             </button>
//             {/* <Link to="/signup" className="btn btn-link btn-link-login">Create Account</Link> */}
//           </div>
//           <Link to="/reset" className=" btn-link btn-link-login">
//             Forgot Password?
//           </Link>
//           {message && <p>{message}</p>}  {/* Displaying login errors */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      let result = await fetch("http://localhost:5000/login", {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!result.ok) {
        throw new Error('Network response was not ok');
      }

      result = await result.json();
      console.warn(result);

      if (result.auth) {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/files');
      } else {
        alert(result.result || 'Failed to log in');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div className="container-login">
      <div className="card-login">
        <div className="card-title-login">
          <h1>Login</h1>
        </div>
        <div className="form-login">
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-login" className="form-control form-control-login" />
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password-login" className="form-control form-control-login" />
          <div className="form-buttons-login">
            <button onClick={handleLogin} className="btn btn-primary btn-login">Login</button>
          
          </div>
          <Link to="/reset" className=" btn-link btn-link-login">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}  

export default Login;
