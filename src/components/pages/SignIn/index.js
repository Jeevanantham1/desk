import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Login() {
    const[state,setState]=useState(
        {
            username:'',
            password:''
        }
    )
    const {username,password}=state;

const handlechange=(event,id)=>{
    console.log('event:',event.target.value,id);
    setState({
        ...state,
        [id]:event.target.value

    } )
}
const handlesubmit=(event)=>{
    const{username,password}=state;

    console.log('username:',username);
    console.log('password:',password);
}

    return (
      

       
      
        <div className='login-container'>
            
           <div className='loginpage'>
           <div className='h'>
            <center>Login</center>
           </div>
            <input type="text"
             placeholder='username'
              value={username} 
              onChange={(event)=>handlechange(event,'username')} 
              className='name'>
                </input><br></br>
            <input type="password" 
            placeholder='password'
            value={password}
             onChange={(event)=>handlechange(event,'password')} 
             className='name'>
                </input><br></br>
            
           <button type='submit' className='button' onClick={()=>handlesubmit() }>Login</button><br></br>
             
             <Link to ="/signup" ><b>create a new account?</b></Link><br></br>
             <Link to ="/forget"><b>forget password?</b></Link>
           </div>
          </div>
      
        
    ) 
}

export default Login;