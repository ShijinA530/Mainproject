import React from 'react'
import './Cover.css';


function Cover() {
  return (
    <div className='cover'>
      <div className='login'>
        <div className="title"><h3 className='txt'>Voter Login</h3></div>
        <div className="form">
            <form action="">
              <input className='id' type="text" name='ID' placeholder='ID'/>
              <input className='pswd' type='password' name='password' placeholder='Password'/>
              <div className='login-btn'>
                <input className='sub-btn' type='submit' value='Login'/>
              </div>
            </form>
        </div> 
        <div className='description'>
          <p>Don't have an account? <a href="">Register</a></p>  
        </div>       
      </div>
    </div>
  )
}

export default Cover
