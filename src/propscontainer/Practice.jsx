import axios from 'axios';
import React, {useState}from 'react'

const Practice = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

const handleSubmit = (e) =>{
  e.preventDefault();
  setemail("");
  setpassword("");

  axios.post(" http://localhost:5000/data", {
    email, password

  })


  .then(res =>{
    alert(res.data.message);
  })
  .catch(err =>{
    console.error("error occured while sending data", err);
  })

}

  return (
    <div className=''>
        <form className='p-4 mt-4 border rounded' style={{maxWidth:"400px", margin:"auto"}} onSubmit={handleSubmit} >

            <h4>Registration</h4>
            <div className='mt-4'>
                <label className='mb-2'> Email</label>
                <input type="text" placeholder='Enter email' className='form-control' value={email} onChange={(e)=> setemail(e.target.value)} required />
            </div>
            <div className='mt-4'>
              <label className='mb-2'>Password</label>
              <input className='form-control' type="text" placeholder='Enter Password' value={password} onChange={(e)=> setpassword(e.target.value)} required />
            </div>
          <button type='submit' className='btn btn-primary mt-4'>Submit</button>
            
        </form>
      
    </div>
  )
}

export default Practice
