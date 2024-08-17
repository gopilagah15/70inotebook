import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({email:'',description:''})
    const {email,password} = credentials;

    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const host = "http://localhost:5000" 

  //API CALL

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",    
         headers: {
          "Content-Type": "application/json", 
         },
             body: JSON.stringify({email,password}),  
             });
    const json = await response.json();   
    console.log(json);
    if(json.success){
        localStorage.setItem('token',json.authtoken);
        navigate('/home')
    }else{
        alert('try again')
    }
    }
  return (
    <div>
          <form onSubmit={handleSubmit} >
       
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

export default Login