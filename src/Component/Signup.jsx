import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false); // State to handle redirection

  const handleSignup = () => {
    // Perform signup logic
    if (!username || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Signup successful, call the onSignup function
      onSignup();
      setRedirect(true); // Set redirect to true after successful signup
    }
  };

  if (redirect) {
    // Redirect to home page after successful signup
    return <Navigate to="/" />;
  }

  return (
    <div style={{ backgroundImage: 'url("./img/bookcover.jpg")', backgroundSize: 'cover',  backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <h1 className='mt-3 text-center '><span className=''>Signup</span></h1>
      <form>
      <div className="container-fluid p-3" >
      <div className="row justify-content-center align-items-center mt-5" style={{  }}>
        <div className="col-md-6">
          <div className="">
            <div className="">
              {/* <h2 className="card-title">Sign Up</h2> */}
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label"><b>Username</b></label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"><b>Password</b></label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label"><b>Confirm Password</b></label>
                  <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password'/>
                </div>
                <button type="button" className="btn btn-primary mb-5 mt-3" onClick={handleSignup}>Sign Up</button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     
      </form>
      </div>
     
  );
};

export default Signup;

