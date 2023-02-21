import React, { useState } from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import cookies from 'browser-cookies';
import { v4 as uuidv4 } from 'uuid';

import history from "../../../helpers/history";
import './index.scss';


function signup() {

    const[state,setState]=useState(
        {
            username:'',
            password:'',
            email:'',
            reenterpassword:''
        }
    )
    const {username,password,email,reenterpassword}=state;

const handlechange=(event,id)=>{
    console.log('event:',event.target.value,id);
    setState({
        ...state,
        [id]:event.target.value

    } )
}
const handlesubmit=(event)=>{
    const{username,password,email,reenterpassword}=state;
    const token = uuidv4();
    if (token) {
        console.log('token: ', token);


        cookies.set('token', token)
        history.push('/')
    }

//     console.log('username:',username);
//     console.log('password:',password);
//     console.log('email:',email);
//     console.log('re-enterpassword:',reenterpassword);
 }


    return (
        <div className='sp'>
        <div className='login-container1'>
            
           <div className='loginpage1'>
           <div className='h'>
            <center>signup</center>
           </div>
            <input type="text"
             placeholder='username'
             value={username} 
             onChange={(event)=>handlechange(event,'username')} 
              className='name'>
                </input><br></br>
            <input type="text" 
            placeholder='email' 
            value={email} 
            onChange={(event)=>handlechange(event,'email')} 
            className='name'>
                </input><br></br>
            <input type="password"
             placeholder='password' 
             value={password} 
             onChange={(event)=>handlechange(event,'password')} 
             className='name'>
                </input><br></br>
            <input type="password"
             placeholder='re-enter password' 
             value={reenterpassword} 
             onChange={(event)=>handlechange(event,'reenterpassword')} 
             className='name'>
                </input><br></br>
                <button type='submit' className='button' onClick={()=>handlesubmit() }>signup</button><br></br>
                
            <Link to ="/"><b>Login your account?</b></Link>
           </div>
          </div>
          </div>
        
    ) 
}

export default signup;