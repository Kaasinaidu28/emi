import React,{useState} from 'react'
import Data from './City.json';
const Cityname = () => {
    const [search, setsearch] = useState("");


  return (
    <div>
        <center>
            <h2>Find City</h2>
            <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} style={{marginBottom:"10px"}} /> <br></br>

            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map((city)=>{
              return(
              <div style={{"border":"1px solid black", padding:"10px", maxWidth:"50%"}}>
                {city.id}-{city.name}</div>
              )

            })}

          
           
        </center>

      
    </div>
  )
}

export default Cityname;
