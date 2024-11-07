import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Logged in:', response.data);
      // Save the JWT token in localStorage
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
