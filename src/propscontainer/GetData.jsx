import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetData = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products') // <-- use port 5000 if that's your backend
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error getting data:', error);
      });
  }, []);

  return (
    <div  style={{textAlign:'center'}}>
        
      <h2>Product List</h2>
      <ul >
       
        {product.map((item, index) => (
          <li key={index}>
            {item.id} - {item.name} - ₹{item.price}
          </li>
         
        ))}
      </ul>
      
    </div>
  );
};

export default GetData;
