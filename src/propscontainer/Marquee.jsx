import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Marquee = () => {
  return (
    <div>
      <marquee className="bg-dark p-4 text-white" behavior="scroll" direction="left" scrollamount="10">

        <h2> Dear Candidata Welcome To Infor Global Solutions  </h2>

      </marquee>
      
    </div>
  )
}

export default Marquee
