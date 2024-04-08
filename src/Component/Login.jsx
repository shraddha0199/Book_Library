
// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [redirect, setRedirect] = useState(false); // State to handle redirection

//   const handleLogin = () => {
//     // Perform login logic
//     if (!username || !password) {
//       setError('Please enter username and password');
//     } else {
//       // For simplicity, assuming any non-empty username/password is valid
//       // In real-world scenario, you would perform authentication with a server
//       onLogin(username);
//       setRedirect(true); // Set redirect to true after successful login
//     }
//   };

//   if (redirect) {
//     // Redirect to home page after successful login
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="container-fluid mt-5" style={{ backgroundImage: 'url("./img/bookcover2.jpg")', backgroundSize: 'cover',  }}>
//       <div className="row justify-content-center align-items-center " >
//         <div className="col-md-4">
//           <div className="">
//             <div className="">
//               <h2 className="card-title text-center mt-5">Login</h2>
//               <form>
//                 <div className="mb-3 mt-5">
//                   <label htmlFor="username" className="form-label">Username</label>
//                   <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 </div>
//                 <div className="mb-3 mt-5">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <button type="button" className="btn btn-primary mt-5 mb-5" onClick={handleLogin}>Login</button>
//                 {error && <p className="text-danger mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
