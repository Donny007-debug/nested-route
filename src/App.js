
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import UserProfile from './UserProfile'
import Profile from './Profile';
import Settings from './Settings';
import { ProtectedRoute } from './ProtectedRoute';
import { useState } from 'react';
import Login from './Login'


function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState (false);

  const handleLogin = () => {
    setUserIsLoggedIn(true);
    console.log("You have been logged in!")
  }

  const handleLogout = () => {
    setUserIsLoggedIn(false);
    console.log("You have been logged out!");
  }

  return (
    <div className="App">
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/nav'>Nav</Link>
        <Link to = '/about'>About</Link>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <Routes>
        <Route path='/' element = {<ProtectedRoute isAuthenticated = {userIsLoggedIn}><Home userIsLoggedIn = {userIsLoggedIn}/></ProtectedRoute>} >
          <Route path='/profile' element = {<Profile />} />
          <Route path='/settings' element = {<Settings />} />
        </Route>
        <Route path='/nav' element = {<Nav />} />
        <Route path='/about' element = {<About />} />
        <Route path='/user/:id' element = { <UserProfile />} />
        <Route path='/login' element = { <Login /> } />
      </Routes>
    </div>
  );
}

export default App;