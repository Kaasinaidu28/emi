import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';


const Read = () => {
  const [details, setdetails] = useState({});
  const { id } = useParams();
  

  useEffect(()=>{
    
    axios.get(`http://localhost:5001/users/${id}`)
    .then(res => setdetails(res.data))
    .catch(err =>{
      console.log(err);
    });
  },[]);

  return (
    <div className='d-flex  justify-content-center w-100 vh-100 align-items-center bg-light'>
      <div className='w-50 bg-white  border rounded shadow pt-3 pb-5 px-5 '>
      <h3>Details of User</h3>

      <div className='mb-2'>
        <strong>Name: {details.name}</strong>

      </div>

        <div className='mb-2'>
        <strong>Username: {details.username}</strong>
      </div>

       <div className='mb-2'>
        <strong>Email: {details.email}</strong>
      </div>

       <div className='mb-2'>
        <strong>City: {details.city}</strong>
      </div>
      <Link to={`/update/${id}`} className='btn btn-primary me-4'>Edit</Link>
      <Link to={`/home/${id}`} className='btn btn-info'>Back</Link>
      
      </div>




    </div>
  )
}

export default Read;
