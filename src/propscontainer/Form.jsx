import React, { useState } from 'react';

const Form = () => {
    const [city, setCity] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setResult("");
        setError("");  // Reset error state

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then(response => response.json())
            
            .then(data => {
                const kelvin = data.main.temp;
                const celsius = kelvin - 273.15;
                setResult(`Temperature at ${city}: ${Math.round(celsius)}°C`);
                setCity("");
            })
            .catch(err => {
                setError("City not found. Please enter a valid city name.");
            });
    };

    return (
        <center>
            <div className='card' style={{ width: "50%", padding: "80px", backgroundColor: "blueviolet", marginTop: "50px" }}>
                <div className='card-body'>
                    <h3 className='card-title'>Temperature Details</h3>
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            value={city}
                            placeholder='Search City...'
                            style={{ marginTop: "20px", borderRadius: "20px" }}
                            onChange={(e) => setCity(e.target.value)}
                        /><br />
                        <input
                            type="submit"
                            value="Get Temperature"
                            style={{ marginTop: "20px", borderRadius: "8px" }}
                        />
                        {result && <h2 style={{ marginTop: "20px", marginRight: "110px", color: "white" }}>{result}</h2>}
                        {error && <h2 style={{ marginTop: "20px", marginRight: "110px", color: "red" }}>{error}</h2>}
                    </form>
                </div>
            </div>
        </center>
    );
};

export default Form;
