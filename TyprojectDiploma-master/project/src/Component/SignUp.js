// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const collectData = async () => {
//     console.warn(name, email, password);
//     let result = await fetch('http://localhost:5000/register', {
//       method: 'post',
//       body: JSON.stringify({ name, email, password }),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     result = await result.json();
//     console.warn(result);
//     if (result) {
//       localStorage.setItem("user", JSON.stringify(result.result));
//       localStorage.setItem("token", JSON.stringify(result.auth));
//       navigate('/');
//     }
//   }

//   return (
//     <div className="container-signup">
//       <div className="card-signup">
//         <div className="card-title-signup">
//           <h1>Create Account</h1>
//           <span>Already have an account? <a href="login">Sign In</a></span>
//         </div>
//         <div className="form-signup">
//           <input type="text" name="username" id="username-signup" value={name} onChange={(e) => setName(e.target.value)} placeholder="UserName" className="form-control form-control-signup" />
//           <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email-signup" className="form-control form-control-signup" />
//           <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password-signup" className="form-control form-control-signup" />
//           <button onClick={collectData} className="btn btn-primary btn-signup">Sign Up</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const collectData = async () => {
    if (!name || !email || !password) {
      alert('All fields are required.');
      return;
    }

    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!result.ok) {
        throw new Error('Network response was not ok');
      }

      result = await result.json();
      console.warn(result);

      if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate('/');
      } else {
        alert(result.result || 'Failed to sign up');
      }
    } catch (error) {
      console.error('SignUp Error:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div className="container-signup">
      <div className="card-signup">
        <div className="card-title-signup">
          <h1>Create Account</h1>
          <span>Already have an account? <a href="login">Sign In</a></span>
        </div>
        <div className="form-signup">
          <input type="text" name="username" id="username-signup" value={name} onChange={(e) => setName(e.target.value)} placeholder="UserName" className="form-control form-control-signup" />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email-signup" className="form-control form-control-signup" />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password-signup" className="form-control form-control-signup" />
          <button onClick={collectData} className="btn btn-primary btn-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

