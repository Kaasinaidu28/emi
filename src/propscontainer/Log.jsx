import React,{useState} from 'react'
import axios from 'axios';


const Log = () => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[repassword, setRepassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate  = ()=>{

        const newErrors = {};
      const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!email) newErrors.email = 'Email is Required';
      else if(!emailreg.test(email))newErrors.email = 'Enter Valid Email';

      if(!password) newErrors.password = 'Password is Required';
      else if(password.length < 4) newErrors.password = 'Password must be contain above 4 charecters';
      else if(!/[A-Z]/.test(password)) newErrors.password = 'Password contains atleast one upper case';

      if(!repassword) newErrors.repassword = 'Re Enter Password'
      else if(password !== repassword) newErrors.repassword = "Password Does not match please check"

      return newErrors;

    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        const formErrors = validate();
        if(Object.keys(formErrors).length === 0){

            alert("Login Successfull")
            setEmail('');
            setPassword('');
            setRepassword('');
        }

        else{
            setErrors(formErrors);
        }


       axios.post(" http://localhost:5000/login", {
        email, password, repassword
       })
       .then(res =>{
         alert(res.data);
       })
       .catch(err =>{
          console.error("Error While Posting data", err);
       })

    };


  return (
    <div>
        <form className='p-4 mt-4 border rounded' onSubmit={handleSubmit} style={{maxWidth:"400px", margin:"auto"}} >

            <h2 className='text-center' style={{marginRight:"80px"}}>Login Form</h2>
            <div className='mb-3'>
                 <label className=''>Email</label>
            <input type="email" className='form-control' placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            {errors.email && <small className='text-danger mb-2'>{errors.email}</small>}

            </div>
           
              <div className='mb-3'>
                 <label className=''>Password</label>
            <input type="password" className='form-control' placeholder='Enter Your Password'value={password} onChange={(e)=> setPassword(e.target.value)} />
              {errors.password && <small className='text-danger mb-2'>{errors.password}</small>}

              </div>
            
             <div className='mb-3'> 
                <label className=''>Re-Password</label>
            <input type="password" className='form-control'placeholder='Re Enter Your Password' value={repassword} onChange={(e)=> setRepassword(e.target.value)} />

              {errors.repassword && <small className='text-danger mb-2'>{errors.repassword}</small>}


             </div>
             
          <button type="submit" className='btn btn-primary w-100'>Login</button> 


        </form>

      
    </div>
  );
}

export default Log
