import React, { useState } from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
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

    console.log('username:',username);
    console.log('password:',password);
    console.log('newpassword:',newpassword);
}


    return (
      

       
      
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
      
        
    ) 
}

export default forget;