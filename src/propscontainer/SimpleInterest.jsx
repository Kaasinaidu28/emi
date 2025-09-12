import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const SimpleInterest = () => {
  const [amount, setamount] = useState("");
const [rate, setrate] = useState("");
const [years, setyears] = useState("");
const [interest ,setinterest] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();

 // console.log(amount, rate, years);

 if( amount=== "" || rate === "" || years === ""){
  alert("Please Fill All Fields");
 }

 const P = parseFloat(amount);
 const R = parseFloat(rate);
 const T = parseFloat(years);

   if (isNaN(P) || isNaN(T) || isNaN(R)){
    alert("Please Enter Number Only");
    return;
   }
  


const SI = (P * T * R)/100;

   setinterest(SI.toFixed(2));
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  "> 
     <form onSubmit={handleSubmit} className="text-center border border-primary p-5 rounded shadow w-25" >

        <h5 style={{marginTop:"-25px"}}>Calculate Simple Interest</h5>
         <input type="text" onChange={(e) =>setamount(e.target.value)} className='form-control w-100 mb-1'  placeholder='Enter Amount' /><br></br>
          <input type="text" onChange={(e) =>setrate(e.target.value)}  className='form-control w-100 mb-1' placeholder='Enter Rate of Interest'/><br></br>
           <input type="text" onChange={(e) =>setyears(e.target.value)} className='form-control w-100 mb-1' placeholder='Enter Time in Years'/><br></br>

           <button className='btn btn-primary'>Calculate</button>
           
            {interest !== null && (
        <h4 className="mt-4 text-success">
          Simple Interest: ₹{interest}
        </h4>
      )}
           

   </form>
     
    </div>
  )
}

export default SimpleInterest

