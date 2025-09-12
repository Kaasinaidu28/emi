// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      alert(res.data.message);

      //✅ Clear input values
      setUsername('');
      setPassword('');

      // ✅ Hide form
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Login failed!');
    }
  };
        
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      {!isSubmitted ? (
        <>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </>
      ) : (
        <div className="alert alert-success text-center">
          🎉 Login submitted successfully!
        </div>
      )}
    </div>
  );
}


export default LoginForm;
