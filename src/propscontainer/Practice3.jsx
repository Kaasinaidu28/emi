import React, { useState } from "react";

const Practice3 = () => {
    const [btnText, setBtnText] = useState("Submit");
  return (
    <div>
        <form action="" className='p-4 mt-4 border rounded ' style={{maxWidth:"400px", margin:"auto"}}>

            <h2 className='text-center me-5'>Login Here</h2>
            <div className='mb-3 mt-3'>
                <label htmlFor="" className='mb-2'>Mail Id</label>
                <input type="text" placeholder='Enter email' className='form-control'/>

            </div>

               <div className='mb-4'>
                <label htmlFor="" className='mb-2'>Password</label>
                <input type="password" placeholder='Enter Password' className='form-control'/>

                <div className='mt-3'>
                    <button type='submit' onMouseEnter={()=> setBtnText("Click me")} onMouseLeave={()=> setBtnText("Submit")} className='btn btn-success'>{btnText}</button>
                    
                  
                </div>
                <div className="mt-4">
                  <a href="" className="fs-5">Forget Password ?</a>
                </div>


            </div>


        </form>
      
    </div>
  )
}

export default Practice3
