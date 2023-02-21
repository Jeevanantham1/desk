import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'browser-cookies';
import { v4 as uuidv4 } from 'uuid';

import history from "../../../helpers/history";
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
    const token = uuidv4();
    if (token) {
        console.log('token: ', token);


        cookies.set('token', token)
        history.push('/home')
    }
   // console.log('username:',username);
    //console.log('password:',password);
}

    return (
      

       <div className='bg'>
      
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
      
          </div>
    ) 
}

export default Login;