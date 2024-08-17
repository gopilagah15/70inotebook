import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({name:'',email:'',description:''})
    const {name,email,password} = credentials;

    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const host = "http://localhost:5000" 

  //API CALL

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",    
         headers: {
          "Content-Type": "application/json", 
         },
             body: JSON.stringify({name,email,password}),  
             });
    const json = await response.json();   
    console.log(json);
    if(json.success){
        localStorage.getItem('token');
        navigate('/about')
    }else{
        alert('try again')
    }
    }
  return (
    <div>
          <form onSubmit={handleSubmit} >
       <label htmlFor="name" className="form-label">Name  </label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={name} aria-describedby="emailHelp"/>
       <label htmlFor="email" className="form-label">Email address</label>
    <input type="text" className="form-control" id="email" name='email' onChange={onChange} value={email} aria-describedby="emailHelp"/>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" name='password' onChange={onChange} value={password}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup