import {React, useState,  useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Atm = () => {

    const [amount, setamount] = useState("");
    const [balance, setbalance] = useState("");
    const [showBalance, setshowBalance] = useState("true");
     const navigate = useNavigate();


     const withdrawamount = (n)=>{
      n.preventDefault();
      if(amount === "" || Number(amount) <=0){
           alert("Enter a valid amount");
           return;
      }
      if(Number(amount) > balance){
        alert("insufficient balance");
        return;
      }
      setbalance(balance- Number(amount));
      alert(`${amount} withdrawn successfully`);
      setamount("");

     }
    
        const depositamount = (e) =>{
          e.preventDefault();

          if(amount === "" || Number(amount) <= 0){
            alert("enter valid amount");
            return;
          }
          setbalance(balance + Number(amount));
           alert(`${amount} deposited successfully`);
          setamount("");
        }

        const hideclick =(s)=>{
          s.preventDefault();
            setshowBalance(!showBalance); 

        }

        const pinChange = (m)=>{
          m.preventDefault();
          navigate("/Atminf");
          



        }

  return (
    <div className='d-flex justify-content-center mt-5'>

      <form className='border border-primary p-5 rounded shadow w-50 text-center'>
         <h3 className='text-center mb-4'>WELCOME TO SBI</h3>
         <h6 className='mb-4'>Current balance: {showBalance ? balance : "***"}</h6>
         
         <div className="d-flex justify-content-center mb-4"> 
          <button className='btn btn-danger btn-sm ' onClick={hideclick}> {showBalance ? "hide balance" : "Show balance"}</button>
          </div>
      
         <input type="number" placeholder='Enter Amount' className='mb-5' value={amount} onChange={(e)=> setamount(e.target.value)}/><br></br>

         <button type='submit' className='btn btn-danger me-4' onClick={withdrawamount}>Withdraw</button>
         <button  type='submit'  className='btn btn-success' onClick={depositamount}>Deposit</button>
         <button className='btn btn-warning ms-4' onClick={pinChange}>Pin Change</button>

      </form>
      
    </div>
  )
}

export default Atm

