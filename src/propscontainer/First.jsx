import React, {useState,}from 'react';
import './Color.css';

const First = () => {
  const [input, setInput] = useState("");
  const [value , setValue] = useState("");

  const handleSubmit = () =>{


  }


  return (
    <div className='box'>
      <input type='text' value={input} placeholder='Enter Name' onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
      <h2>{value}</h2>
     
    </div>
  )
}

export default First;
