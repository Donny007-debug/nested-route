
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './About';
import UserProfile from './UserProfile'
import Profile from './Components/Profile';
import Settings from './Settings';
import { useState, useEffect } from 'react';
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState (false);
  const navigate = useNavigate();

  useEffect(()=>{
    const storedLoginState = localStorage.getItem('userIsLoggedIn');
    if(storedLoginState === 'true')
      setUserIsLoggedIn(true);
  }, [])
  
  const handleLogout = () => {
    setUserIsLoggedIn(false);
    localStorage.removeItem('userIsLoggedIn');
    console.log("You have been logged out!");
    navigate('/login');
  }

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className="App">
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/nav'>Nav</Link>
        <Link to = '/about'>About</Link>
        {userIsLoggedIn? (
          <button onClick={handleLogout}>Logout</button>) : (
        <button onClick={handleLoginClick}>Login</button>)}
      </nav>

      <Routes>
        <Route path='/' element = {<Home userIsLoggedIn = {userIsLoggedIn} /> } />
        <Route path='/nav' element = {<Nav />} />
        <Route path='/about' element = {<About />} />
        <Route path='/user/:id' element = { <UserProfile />} />
        <Route path='/login' element = { <Login setUserIsLoggedIn = {setUserIsLoggedIn}/> } />
        <Route 
          path='/profile' 
          element = {<ProtectedRoute userIsLoggedIn = {userIsLoggedIn}> 
          <Profile /> 
            </ProtectedRoute> } />
          <Route 
            path='/settings' 
            element = {<ProtectedRoute userIsLoggedIn = {userIsLoggedIn}>
               <Settings />
               </ProtectedRoute> } />
          <Route 
          path='/settings' 
          element = {<ProtectedRoute userIsLoggedIn = {userIsLoggedIn} />} />
        <Route path='/settings' element = {<Settings />} />
      </Routes>
    </div>
  );
}

export default App;