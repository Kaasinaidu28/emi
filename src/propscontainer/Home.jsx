import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {

    const [records, setRecords] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5001/users')
      .then((res)=>{
        setRecords(res.data);// json format
        console.log(res.data);
      });

    },[]);

      const handleDelete= (id) =>{
        if(window.confirm("Are you sure want to delete this user")){
          axios.delete(`http://localhost:5001/users/${id}`)
          .then(res =>{
            console.log("Deleted: ",res.data);
             setRecords(records.filter(user => user.id !== id));
          })
          .catch(error =>{
            console.log(error);
          })
        };


      }
  return (
    <div className='d-flex justify-content-center flex-column align-items-center '>

    <h2 className='mt-4'>User Records</h2>
    <div className='d-flex justify-content-end align-content-end mb-2'>
    <Link to='/crt' className='btn btn-success'>Add +</Link>
    </div>
       
    <table className=' w-75 table table-bordered table-striped p-4'>
    
      <thead className='table-dark'>

        <tr>
          <th>ID</th>
           <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {records.map((list, index)=>{
          return(
          <tr key={index}>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.username}</td>
            <td>{list.email}</td>
            <td>{list.address?.city || list.city}</td>
            <td>
              <Link to={`/read/${list.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                  <Link to={`/update/${list.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={() => handleDelete(list.id)}  className='btn btn-sm btn-danger mb-2'>Delete</button>     
            </td>

          </tr>

          );

        })}

      </tbody>
    </table>
    </div>
     
          
  );
}

export default Home;
