import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Atminf = () => {
    const [pin, setpin] = useState("");
     const navigate = useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault();

        if(pin == ""){
          alert("Please enter valid pin number");
          return;
        }

      
          axios.post("http://localhost:5000/sign",{pin})
          .then(res=>{
         
            alert(res.data.message);

            if(res.data.message === "Sign in successfull"){
             navigate("/atm"); 
            }
           

          })
          .catch(err=>{
             alert("Login failed: " +err.message)
             return;
          })
           

       // pin = localStorage.getItem("atm_pin");
     // const atmpin = 12345;
       

    }

      const createpin=(n)=>{
        n.preventDefault();
        navigate("/pingen");
     

      }
  return (
    <div className='d-flex justify-content-center  mt-4'>
        <form className='border border-primary shadow w-50 text-center p-4' onSubmit={handleSubmit}>
            <h3>Welcome to SBI ATM</h3>
              <div className='mt-4'>
                <label className='mb-2' >Please Enter your PIN number</label>
                <input type="number" placeholder='PIN Number' value={pin} className='form-control' onChange={(e)=> setpin(e.target.value)}/>
              </div>

              <button className='btn btn-success mt-4 me-4' type='submit' value="submit">Submit</button>
              <button className='btn btn-primary ms-4 mt-4' onClick={createpin}>Create PIN</button>

        </form>

      
    </div>
  )
}

export default Atminf
