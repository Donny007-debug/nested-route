import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({setUserIsLoggedIn}) => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("You have been logged in!");
    setUserIsLoggedIn(true);
    navigate('/');
  };
  
  return (
    <div>
        <form>
            Username
            <input type='text' />
            Password
            <input type='password' />
            <button type = 'submit' onClick={handleLogin}>Login</button>
        </form>
    </div>);

}
export default Login;