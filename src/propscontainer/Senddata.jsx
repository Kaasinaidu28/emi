import React, { useState } from 'react';
import axios from 'axios';

const Senddata = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData(prev => ({  ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/submit', formData)
      .then(res => {
        alert(res.data); // shows response from server
        
      })
      .catch(err => {
        console.error('Error posting data:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Form</h2>
      <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange}
      /><br /><br />

      <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange}
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Senddata;
