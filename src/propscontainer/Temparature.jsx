import React,{useState} from 'react'

const Temparature = () => {
    const [city, setCity] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [humidity, sethumidity] = useState("");

    const submitHandler = (t) =>{
        t.preventDefault();
        setResult("");
        setError("")
        setCity("")
         if (city.trim() === "") {
    setError("Please enter city name");
    setResult("");
    return;
  }
      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then(Response => Response.json())

        .then(data => {
          console.log(data);
          const kelvin = data.main.temp;
          const celsius = kelvin-273.15;
          setResult( "Temparature at "+" "+ city +"\n"+Math.round(celsius)+"°C");
          const humid = data.main.humidity;
          sethumidity(`Humidity at ${city} = ${humid}%`);
          
        })
        .catch (err =>{
          setError( city+ " Was Not Found"+"\n"+"Enter Proper City Name");
        
        
        })
          
    }

  return (
    <center>
         <div className='card' style={{width:"50%", padding:"80px",  marginTop:"50px"}}>
        <div className='card-body'>
        <h2 style={{marginLeft:"40px"}} className='card-title'>Temparature details</h2>
          <form onSubmit={submitHandler}>
            <input type="text" value={city} placeholder='Search City...' style={{marginTop:"20px", borderRadius:"20px"}}  onChange={(e) => setCity(e.target.value)}/><br></br>
            <input type="submit"  value="Get Temparature"  style={{marginTop:"20px", borderRadius:"8px"}}/>

            <h2 style={{marginTop:"20px", marginRight:"110px"}}>{result}</h2>
            <h2 style={{marginTop:"20px", marginRight:"110px"}}>{humidity}</h2>
            <h2 style={{color:"Red"}}>{error}</h2>

          </form>

        </div>


    </div>

    </center>
   
  )
}

export default Temparature
