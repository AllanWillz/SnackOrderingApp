import React, { useState } from 'react';
import '../src/MealList';
import './Login.css'
// import logoImage from '../src/images/Odyssey-b-logo.png'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    if (password === confirmPassword) {
      onLogin(email);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="login-container">
    {/* <img  src={logoImage} alt='odyssey logo' />  */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="form-card col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
