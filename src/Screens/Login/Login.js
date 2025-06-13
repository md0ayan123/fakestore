import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css'

const Login = () => {
    const navigate =  useNavigate()
    const handleSubmit=async()=>{
      const credentials = { username: 'john_doe', password: 'pass123' };
      axios.post('https://fakestoreapi.com/auth/login', credentials)
        .then((response)=>{
          console.log(response.data);
             let token=response.data.token
             localStorage.setItem("token",token)
        }); 
        navigate("/home");
  }
    
    
  return (
    <div className='login-page'>
        <h1 className='mb-5'>Login</h1>
  <div className='login-card shadow card'>
        <form className='form-input p-5' onSubmit={handleSubmit}>
          <div className='input-box'>
          <label className='form-label'>Username</label>
          <input type="text" className='form-control' placeholder='username' required />
          </div>
          
        <div className='input-box'>
        <label className='form-label'>Password</label>
        <input type="password" className='form-control' placeholder='passworwd' required/>
        </div>
         <button className='btn btn-primary mt-3 ' type='submit'>Submit</button>
        </form>
     
    </div>
    </div>
  
  )
}

export default Login
