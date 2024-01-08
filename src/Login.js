// src/components/Login.js
import React, { useState } from 'react';
import AuthService from '../src/AuthService';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Call the login method from AuthService
      await AuthService.login(email, password);
      // If successful, call onLogin
      onLogin();
    } catch (error) {
      // If unsuccessful, set the error message
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
