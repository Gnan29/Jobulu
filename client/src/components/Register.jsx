import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      console.log('User registered:', response.data);
    } catch (error) {
      console.log('Error registering:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" className="border p-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2">Register</button>
      </form>
    </div>
  );
}

export default Register;
