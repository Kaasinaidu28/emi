
import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  //const [details, setdetails] = useState({});
  const { id } = useParams();

  
    const [values, setvalues] = useState({ 
      name:'',
      username:'',
      email:'',
      city:''
    });
    const navigate = useNavigate();


   useEffect(()=>{
    
    axios.get(`http://localhost:5001/users/${id}`)
    .then(res => setvalues(res.data))
    .catch(err =>{
      console.log(err);
    });
  },[id]);

   const handleSubmit = (event) =>{
    event.preventDefault();
    axios.put('http://localhost:5001/users/'+id, values)
    .then(res =>{
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err);
    })
    navigate('/home');

   }
  
  return (
    <div>
      <form className='p-4 mt-5 border rounded bg-light'style={{maxWidth:"400px", margin:"auto"}} onSubmit={handleSubmit} >
        <h4 className=''>Update User Details</h4>
        <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>Name</h6>
            <input type="text" className='form-control' name='name' value={values.name} onChange={e => setvalues({...values, name: e.target.value})} />
        </div>

         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>User Name</h6>
            <input type="text" className='form-control' name='username' value={values.username}  onChange={e => setvalues({...values, username: e.target.value})} />
        </div>

         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>Email</h6>
            <input type="text" className='form-control' name='email'  value={values.email}  onChange={e => setvalues({...values, email: e.target.value})}/>
        </div>

         <div className='mb-3'>
             <h6 className='d-flex justify-content-lg-start'>City</h6>
            <input type="text" className='form-control' name='city'  value={values.city} onChange={e => setvalues({...values, city: e.target.value})} />
        </div>
        <button type="submit" className='btn btn-success me-4'>Submit</button>
          <Link to='/home' className='btn btn-primary' style={{marginTop:"9px"}}>Back</Link>
        </form>
    </div>
  )
}

export default Update;
