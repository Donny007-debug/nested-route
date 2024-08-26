
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import UserProfile from './UserProfile'
import Profile from './Profile';
import Settings from './Settings';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/nav'>Nav</Link>
        <Link to = '/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element = {<Home />} >
          <Route path='/profile' element = {<Profile />} />
          <Route path='/settings' element = {<Settings />} />
        </Route>
        <Route path='/nav' element = {<Nav />} />
        <Route path='/about' element = {<About />} />
        <Route path='/user/:id' element = { <UserProfile />} />
        </Routes>
    </div>
  );
}

export default App;
