
import React,{useState, useEffect} from 'react';



const Firstone = () => {

      const [fake,setFake] = useState([])
      useEffect(()=>{
          fakestore();

      },[])
        

    const fakestore = async () =>{

        const getData = await fetch("https://fakestoreapi.com/products");
          const jsonData = await getData.json();
         // console.log(jsonData);
          setFake(jsonData);
    }
    fakestore();
  return (
    <div>
      <h2>Fake Store Data</h2>
     {fake.map((values, index)=>{
    return(
      <div class="row">
         <div key={index} className="col-md-4 mb-4">
        
      <div class="card " style={{"width" : "18rem", "height" : "350px", marginTop:"15px"}}> 
      <h4>{values.title}</h4>
      <img src= {values.image} style={{width : "100px", height:"70px", marginTop:"20px"}} />
      <p style={{marginTop:"10px"}}>{values.description}</p>
        <button class="btn btn-primary" style={{marginTop:"30px"}}>Order Now</button>
      </div>
      </div>
    </div>

    

    )

     })}
     


     
    </div>
  )
}

export default Firstone
