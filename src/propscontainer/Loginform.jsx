import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const [errors, setErrors] = useState({});


  {/*const validate = () => {
    const newErrors = {};
    const newSuccess = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email';


    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 4) newErrors.password = 'Password must be at least 4 characters';
    else if (!/[A-Z]/.test(password)) newErrors.password = 'Must contain at least one uppercase letter';

    return newErrors;
   
  }; // validation  */}

  const handleSubmit = (e) => {
    
    e.preventDefault();
    

    axios.post("http://localhost:5000/posting",{
      email, password
    })

    .then(res=>{
      alert(res.data.message)
      setEmail('');
    setPassword('');
    })

     .catch(err =>{
    console.error("error occured while sending data", err);
  })

  }

   {/* const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
  

    } else {
      setErrors(formErrors);
          axios.post("http://localhost:5000/posting",{
        email, password
       })

         .then(res=>{
          alert(res.data.message);
         })
           .catch(err =>{
         console.error("error occured while sending data", err);
         })
      
    
   }; */}

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-5" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className="mb-4 text-center" style={{marginRight:"100px"}}>Login</h2>

      <div className="mb-3">
        <label>Email</label>
        <input  type="text" className="form-control" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        {/*{errors.email && <h6 className="text-danger">{errors.email}</h6>}*/}
       
        
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
       {/*} {errors.password && <h6 className="text-danger">{errors.password}</h6>}*/}
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
}

export default LoginForm;
