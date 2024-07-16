// LoginForm.jsx
import React from 'react';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" /><br />
        <label>Password:</label>
        <input type="password" /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={handleToggleRegister}>Register here</button></p>
    </div>
  );
}

export default Login;
