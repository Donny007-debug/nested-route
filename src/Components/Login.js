import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = ({setUserIsLoggedIn}) => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("You have been logged in!");
    setUserIsLoggedIn(true);

    const trimmedUsername = username.trim();
  const trimmedPw = pw.trim();

  if(trimmedUsername === '' || trimmedPw === ''){
    setErrormsg("Username or Password must not be empty!!!");
    return;
  }
  setErrormsg('');

  if(rememberMe){
    localStorage.setItem('userIsLoggedIn', 'true');
  }
  
    navigate('/');
  };

  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [errormsg, setErrormsg] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  
  
  return (
    <div>
        <form>
            Username
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            Password
            <input type='password' value={pw} onChange={(e) => setPw(e.target.value)}/>
            <input type='checkbox' checked = {rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /> Remember Me
            <button type = 'submit' onClick={handleLogin}>Login</button>
        </form>
        {errormsg && <p style = {{color: 'red'}}> {errormsg} </p>}
    </div>);


}
export default Login;