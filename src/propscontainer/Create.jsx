import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Create = () => {

  const [values, setvalues] = useState({
    name:'',
    username:'',
    email:'',
    city:''
  });

  const [errors, setErrors] = useState({});

  const validate = ()=>{
    let newErrors = {};

    if(!values.name.trim()) newErrors.name = "Name is required";
        if(!values.username.trim()) newErrors.username = "UserName is required";
            if(!values.email.trim()) newErrors.email = "eamil is required";
            else if (!/\S+@\S+\.\S+/.test(values.email)) {
              newErrors.email = "Enter Valid email";
            }

            if(!values.city.trim()) newErrors.city = "City name is required";

            return newErrors;

  }

  const navigate = useNavigate();
  
 const handleSubmit = (event)=>{
  event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // show errors
      return; // stop form submit
    }
  axios.post('http://localhost:5001/users', values)
 
    .then(res => console.log(res.data));
    navigate('/home')
 }

  return (
    <div>
       <form className='p-4 mt-5 border rounded bg-light'style={{maxWidth:"400px", margin:"auto"}} onSubmit={handleSubmit} >
        <h4 className=''>Add New User</h4>
        <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>Name</h6>
            <input type="text"  className='form-control' name='name' onChange={ e => setvalues({...values, name: e.target.value})} />
            {errors.name && <h6 className='text-danger'>{errors.name}</h6>}
        </div>

         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>User Name</h6>
            <input type="text"  className='form-control' name='username' onChange={ e => setvalues({...values, username: e.target.value})} />
              {errors.username && <h6 className='text-danger'>{errors.username}</h6>}
        </div>


         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>Email</h6>
            <input type="text" className='form-control' name='email' onChange={ e => setvalues({...values, email: e.target.value})} />
              {errors.email && <h6 className='text-danger'>{errors.email}</h6>}
        </div>

         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>City</h6>
            <input type="text" className='form-control' name='city'  onChange={ e => setvalues({...values, city: e.target.value})}/>
              {errors.city && <h6 className='text-danger'>{errors.city}</h6>}
        </div>
          <button type='submit' className='btn btn-success me-4'>Submit</button>
          <Link to='/home' className='btn btn-primary mt-2'>Back</Link>
        </form>
    </div>
  )
}

export default Create;
