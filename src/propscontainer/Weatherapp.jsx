import React,{useEffect} from 'react';
import '../Weather.css';



const Weatherapp = () => {

  const Search = async (city) =>{
 
  
  }
  useEffect(()=>{
    Search("India");

  },[])
  return (
    <div>
        <div className="weather">
            <h2>Weather</h2>
            <div className='search'>
              <input type='text' placeholder='Search...'></input>
              <span className='bi bi-search ms-3'></span>
            </div>
            <div>
            <img src='image/surya.png'></img>
            </div>
            <div className='temp'>
              <h1> 22°C </h1>
              <h3 className='text me-5'>India</h3>
            </div>
             <div className='humidity'>
                 <img src='image/humidifier.png'></img>
                  <div className='hm'>
                  <h3 className='humidity-h3'>90%</h3>
                  <p>Humidity</p>
                  </div> 
             </div>
             <div className='wind'>
             <img src='image/wind.png'></img>
             <div className='windspeed'>
             <h3 className='humidity-h3'>32 km/h</h3>
             <p>Wind Speed</p>

             </div>
                 

             </div>
        </div>
     
      
    </div>
  )
}

export default Weatherapp;
