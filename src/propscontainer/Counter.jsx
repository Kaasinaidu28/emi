import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Counter = () => {

  const [data ,setdata] = useState([]);

  const getData = async () =>{
    const details = await axios.get('https://jsonplaceholder.typicode.com/posts');
   console.log(details.data);
    setdata(details.data);
  }


//console.log(value);

  return (
    <div>
      <center>
        <h2>Get the data from api</h2>
        <button onClick={getData}>Get Data</button>
        {data.map((post=>{
          return(
          <div key={post.id} style={{border:"1px solid black", width:"500px", height:"300px", padding:"10", margin:"10px", justifyContent:"center"}}>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
               <button >Delete</button>
          </div>
          
          );
        }))};
      
      
      </center>
   
      
      
    </div>
  )
}

export default Counter
