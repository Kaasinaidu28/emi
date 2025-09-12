import React, { useEffect, useState } from 'react';
import './Color.css';

const ColorBox = () => {

  const [count, setCount]= useState(0);
   const increment = ()=>{
    setCount(count+1);
   }
   const decrement = () =>{
    setCount(count-1);

   }
   const reset = ()=>{
       setCount(0)

   }
  return(
    <div className='box'>

      <h2>count:{count}</h2>
      <button style={{
         margin:"15px"
      }} onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button style={{marginLeft:"15px"}} onClick={reset}>Rest</button>


    </div>
  )
 
};

export default ColorBox;
