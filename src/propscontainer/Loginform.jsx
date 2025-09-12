import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 4) newErrors.password = 'Password must be at least 4 characters';
    else if (!/[A-Z]/.test(password)) newErrors.password = 'Must contain at least one uppercase letter';

    return newErrors;
  }; // validation 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert('Login successful!');
      setPassword('');
      setErrors('');
      setEmail('');
      // Perform login logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className="mb-4 text-center">Login</h2>

      <div className="mb-3">
        <label>Email</label>
        <input  type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <small className="text-danger">{errors.password}</small>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
}

export default LoginForm;
