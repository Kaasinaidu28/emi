import React, { useState } from 'react'

const Practice2 = () => {
const [mail, setmail] = useState("");
const [password, setpassword] = useState("");


function handleSubmit(e){
    e.preventDefault();

    alert("Details submited successfull");
     setmail('');
       setpassword('');
     

}



  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='p-4 border border rounded mt-5' style={{width:"400px", margin:"auto"}}>

            <h2 className='text-center' style={{marginRight:"80px"}}>Login Here</h2>

     <div className='mt-4'>
        <label htmlFor="">Email</label>
        <input type="email" className='form-control' value={mail} required onChange={(e)=>setmail(e.target.value)} />

     </div>
       
        <div className='mt-4'>
        <label htmlFor="">Password</label>
        <input type="password" className='form-control' value={password} required onChange={(e)=>setpassword(e.target.value)} />

     </div>

       <div className='mt-2' style={{marginLeft:"200px"}}>
        <a href="" className='' style={{textDecoration:"none"}}>Forgot password?</a>
       </div>

       <div className='mt-3 mb-3'>
        <button className='btn btn-primary'>Submit</button>


       </div>
       



        </form>
      
    </div>
  )
}

export default Practice2
