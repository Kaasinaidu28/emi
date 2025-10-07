import React, { useState } from 'react'

const Emi = () => {

    const [amount, setamount] = useState("");
    const [years, setyears] = useState("");
    const [rate, setrate] = useState("");
    const [interest, setinterest] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
         const amounts = parseFloat(amount);
       const anualrate = parseFloat(rate);
       const time = parseFloat(years);
       if(amount === "" || rate ==="", years === ""){
        alert("Please Enter All Fields");
       }

       if(isNaN(amount) || isNaN(rate) || isNaN(years)){
        alert("Enter Numbers only");
       }



const P = amounts
       const R = anualrate  / 12 / 100;
       const T = time * 12; 

        const emi = (P * R * Math.pow(1 + R, T)) / (Math.pow(1 + R, T) - 1);
       
    setinterest(emi.toFixed(2)); 


        

    }




  return (
    <div className='mt-5'>
        <form className='border border-primary p-5 rounded shadow w-100' onSubmit={handleSubmit}>
             <h3 className='text-center mb-5'>Calculate EMI</h3>
            <div className='row'>
                <div className='col'> 
                    Amount You Need <input type="text" size="10" min="100000" max="1000000" onChange={(e)=> setamount(e.target.value)}  />
                </div>
                <div className='col'>
                    For <input type="text" size={5} min={1} max={10}  onChange={(e)=> setyears(e.target.value)} /> Years
                </div>
                <div className='col'>
                    Interest Rate <input type="text" size={10} min={2} max={10}   onChange={(e)=> setrate(e.target.value)}/> %
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col'>
                    <input type="range"  className="form-range" min={100000} max={1000000} />
                </div>
                  <div className='col'>
                    <input type="range"  className="form-range" min={1} max={10} />
                </div>
                  <div className='col'>
                    <input type="range"  className="form-range" min={2} max={10} />
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col'>
                    <span className='float-start'>1,00000</span>
                     <span className='float-end'>10,00000</span>
                </div>

                <div className='col'>
                    <span className='float-start'>1</span>
                        <span className='float-end'>10</span>
                </div>

                 <div className='col'>
                    <span className='float-start'>2%</span>
                        <span className='float-end'>10%</span>
                </div>


            </div>

            <div className='row text-end mt-3'>
                <div className='col'>
                    <button className='btn btn-primary'>Calculate</button>
                </div>
            </div>

            <div className='row mt-3'>
                <h4 className='col'> Your Monthly Emi: ₹{interest}</h4>
            </div>

        </form>

      
    </div>
  )
}

export default Emi
