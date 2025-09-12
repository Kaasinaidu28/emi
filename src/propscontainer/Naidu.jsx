import React,{useState} from 'react'
import axios from 'axios';

const Naidu = () => {
    const [formData, setFormData] = useState({name:'', email: '', password:''});
     const [submittedData, setSubmittedData] = useState(null);

    const handleChange=(e)=>{
        setFormData(prev =>({
            ...prev, [e.target.name] : e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
      const confirmMsg = `Please confirm the submitted data:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`;

    const userConfirmed = window.confirm(confirmMsg); // Show confirm box

    if (!userConfirmed) {
        // User clicked "Cancel"
        return;
    }  
        axios.post('http://localhost:5001/data', formData)
        .then(res =>{
            alert(res.data);
            setSubmittedData(formData);
                setFormData({name:'', email:'', password:''});
            })
             .catch(err=>{
                console.error("error occured", err);
            });
    };

  return (
    <div>
        <h3>Submit your data here</h3>
        <br />
        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
        <input type='text' name='name' placeholder='enter name' style={{marginTop:"15px"}} value={formData.name} onChange={handleChange}></input>
        <br />
        <input type="email" name='email' placeholder='enter email'  style={{marginTop:"15px"}} value={formData.email} onChange={handleChange} />
        <br />
         <input type="password" name='password' placeholder='enter password'  style={{marginTop:"15px"}} value={formData.password} onChange={handleChange} />
        <br />
        <button type='submit'>Submit</button>
           </form>
            {submittedData && (
        <div style={{ marginTop: "30px" }}>
          <h4>Your Data:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
           <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}

      
    </div>
  );
};

export default Naidu;
