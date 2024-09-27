
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import UserProfile from './UserProfile'
import Profile from './Profile';
import Settings from './Settings';
import { useState } from 'react';
import Login from './Login'


function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState (false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserIsLoggedIn(false);
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
        <Route path='/' element = {<Home userIsLoggedIn = {userIsLoggedIn} /> } >
          <Route path='/profile' element = {<Profile />} />
          <Route path='/settings' element = {<Settings />} />
        </Route>
        <Route path='/nav' element = {<Nav />} />
        <Route path='/about' element = {<About />} />
        <Route path='/user/:id' element = { <UserProfile />} />
        <Route path='/login' element = { <Login setUserIsLoggedIn = {setUserIsLoggedIn}/> } />
      </Routes>
    </div>
  );
}

export default App;