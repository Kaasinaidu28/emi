import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Product.json';

const Phone = () => {
  return (

    <div className='row justify-content-center'>
      {Data.map((product)=>{
        return(
        <div className='col md-3 mb-4'>
          <div className='card text-center shadow-sm'style={{ width: "70%", marginTop:"30px" }} >
            <img src={product.image} className='card-img-top 'style={{width:"50%", height:"300px"}} alt=""/>
            <div className='card-body'>
              <h3>{product.title}</h3>
              <h3 className='text-primary'>₹{product.price}</h3>
             
              <h6>{product.description}</h6>
            </div>

          </div>

        </div>
        );

      })};

    </div>
  
  );
};

export default Phone;
