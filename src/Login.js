import React from 'react'

export const Login = ({setUserIsLoggedIn}) => {

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("You have been logged in!");
    setUserIsLoggedIn(true);
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