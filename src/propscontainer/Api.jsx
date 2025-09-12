import React, {useState} from 'react'

const Api = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [id, setId] = useState("");
    const [dept, setDept] = useState("");

    const userDetails = {name, role, id, dept};

      const userHandler = (emp) =>{

        emp.preventDefault();
        const submit = "Your Details Submitted Successfull";

       const submitteddata = window.confirm(submit);

       if(!submitteddata){
        return;
       }
        console.log(userDetails);

      }

  return (
    <div>

        <form className='frm' onSubmit={userHandler}>
            <dt>Employee Name</dt>
            <input type='text'name='name' onChange={(n) => setName(n.target.value)}></input>
            <dt>Employee Role</dt>
            <input type='text' name='role' onChange={(n) => setRole(n.target.value)}></input>
            <dt>Employee Id</dt>
            <input type='text' name='id'  onChange={(n) => setId(n.target.value)}></input>
            <dt>Employee Dept</dt>
            <input type='text' onChange={(n) => setDept(n.target.value)}></input><br></br>
            <button type='submit' name='dept'  >Submit</button>
            
        </form>
      
    </div>
  )
}

export default Api
