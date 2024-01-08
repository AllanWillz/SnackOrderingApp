// src/components/SignUp.js
import React, { useState } from 'react';
import AuthService from '../src/AuthService';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      // Call the signup method from AuthService
      await AuthService.signup(email, password);
      // If successful, call onSignUp
      onSignUp();
    } catch (error) {
      // If unsuccessful, set the error message
      setError('Sign up failed');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
