import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pingen = () => {
    const [newpin, setnewpin] = useState("");
      const [newpinn, setnewpinn] = useState("");

     const Navigate = useNavigate();

    const handlesubmit = (m)=>{
        m.preventDefault();

          if(newpin === "" || newpinn === ""){
          alert("please enter new pin number");
          return;
        }
        if(newpin != newpinn){
          alert("pin not matched  please check your pin");
         return;
        }

         if (!/^[0-9]+$/.test(newpin) || !/^[0-9]+$/.test(newpinn)) {
        alert("Please enter numbers only");
        setnewpin("");
         setnewpinn("");
         return;
         }

        if(newpin.length < 4 ||newpinn.length < 4){
          alert("Pin number should not be less than 4");
          return;
        }

                  
        if(newpin === newpinn){
           axios.post(" http://localhost:5000/atmpin",{
          newpin, newpinn
        })
        .then(res=>{
          alert(res.data.message);
          //localStorage.setItem("atm_pin", newpin);
          Navigate("/atminf")
        })
           .catch(err =>{
        console.error("error occured while sending data", err);
           });
        } 
       
      
     
        
    }
  return (
    <div className='d-flex justify-content-center mt-4'>
        <form className='border border-primary  shadow p-4 text-center w-25' onSubmit={handlesubmit}>

            <h3 className='mb-4'>Create Your Atm pin</h3>
            <input type="text" placeholder='Enter new pin' value={newpin} onChange={(e)=> setnewpin(e.target.value)} className='form-control mb-4' />
              <input type="text" placeholder='Re-Enter new pin'  value={newpinn} onChange={(e)=> setnewpinn(e.target.value)} className='form-control mb-4' />
              <button type="submit" className='btn btn-success'>Submit</button>
        </form>
      
    </div>
  )
}

export default Pingen
