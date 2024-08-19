// import React, { useState } from "react";

// const Resetpassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const Click = async (e) => {
//     e.preventDefault();

//     let res = await fetch("http://127.0.0.1:5000/reset", {
//       method: "post",
//       body: JSON.stringify({ email }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const data = await res.json();  
//     console.log(data);
//     if (data.status === 201) {
//       setEmail("");
//       setMessage("Password reset link sent successfully");
//     } else {
//       setMessage("Password reset failed.");
//     }
//   }

//   return (
//     <div>
//       <div className="card1" style={{ marginTop: '100px' }}>
//         <h2>Reset Password</h2>
//         {message ? <p>{message}</p> : ""}
//         <p>You can reset your Password here</p>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="passInput" 
//           placeholder="Email address"
//         /><br/>
//         <button onClick={Click}>Send My Password</button>
//       </div>
//     </div>
//   );
// }

// export default Resetpassword;
import React, { useState } from "react";

const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Click = async (e) => {
    e.preventDefault();

    let res = await fetch("http://127.0.0.1:5000/reset", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();  
    console.log(data);
    if (data.status === 201) {
      setEmail("");
      setMessage("Password reset link sent successfully");
    } else {
      setMessage("Password reset failed.");
    }
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2 className="reset-password-card-header">Reset Password</h2>
        {message && <p className="reset-password-message">{message}</p>}
        <p>You can reset your password here</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="reset-password-input" 
          placeholder="Email address"
        /><br/>
        <button onClick={Click} className="reset-password-submit-btn">Send My Password</button>
      </div>
    </div>
  );
}

export default Resetpassword;
