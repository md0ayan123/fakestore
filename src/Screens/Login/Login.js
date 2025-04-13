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
  <div className='login-card p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 '>
        <h1 className='mb-5'>Login page</h1>
        <form className='form-input ' onSubmit={handleSubmit}>
          <div className='mt-3'>
          <label className='p-2'>Username</label>
          <input type="text" className='username-input' placeholder='username' />
          </div>
          
        <div className='mt-2'>
        <label className='p-2 '>Password</label>
        <input type="password" className='password-input' placeholder='passworwd' />
        </div>
         <button className='btn btn-primary mt-3 ' type='submit'>Submit</button>
        </form>
     
    </div>
    </div>
  
  )
}

export default Login
