import React,{useState} from 'react'


const ChangeColor = () => {
  const [color, setColor] = useState("");

  const  ChangeColor = (color) =>{
    setColor(color)

   }
   
  return (
    <div style={{textAlign:"center", marginTop:"60px"}}>
      <div  className='box' 
       style={{
        width:"200px",
        height:"200px",
        border:"2px solid white",
        borderRadius:"10px",
        backgroundColor: color,
      
      
    
      }}></div>
      <div  
      style={{marginTop:"30px"}}>
        <button
        onClick={()=> ChangeColor ("red")}
         style={{
          
          backgroundColor:"red",
          padding:"10px 20px",
          border:"none",
          borderRadius:"5px",
          marginRight:"10pzx"
          
        
        }}>Red</button>
         <button
        onClick={()=> ChangeColor ("green")}
         style={{
          
          backgroundColor:"green",
          padding:"10px 20px",
          border:"none",
          borderRadius:"5px",
          
        
        }}>Green</button>


      </div>
      
      
    </div>
  )
}

export default ChangeColor
