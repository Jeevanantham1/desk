import React, { useState } from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import cookies from 'browser-cookies';
import { v4 as uuidv4 } from 'uuid';

import history from "../../../helpers/history";
import './index.scss';

function forget() {
    const[state,setState]=useState(
        {
            username:'',
            password:'',
            newpassword:''
        }
    )
    const {username,password,newpassword}=state;

const handlechange=(event,id)=>{
    console.log('event:',event.target.value,id);
    setState({
        ...state,
        [id]:event.target.value

    } )
}
const handlesubmit=(event)=>{
    const{username,password,newpassword}=state;

    const token = uuidv4();
    if (token) {
        console.log('token: ', token);


        cookies.set('token', token)
        history.push('/')
    }

    // console.log('username:',username);
    // console.log('password:',password);
    // console.log('newpassword:',newpassword);
}


    return (
      

       <div className='fp'>
      
        <div className='login-container'>
            
           <div className='loginpage'>
           
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
            <input type="password" 
            placeholder='newpassword' 
            value={newpassword} 
            onChange={(event)=>handlechange(event,'newpassword')} 
            className='name'>
                </input><br></br>
            
                <button type='submit' className='button' onClick={()=>handlesubmit() }>Change</button><br></br>
            <Link to ="/"><b>Login again</b></Link>
           </div>
          </div>
          </div>
        
    ) 
}

export default forget;