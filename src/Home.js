import React from "react";
import { Link, Outlet } from "react-router-dom";
import Loggedout from './Loggedout'
function Home({userIsLoggedIn}) {
    return(
        userIsLoggedIn? (
        <div>
            <h2>Dashboard</h2>
                <nav>
                    <Link to = 'profile'>Profile</Link>
                    <Link to = 'settings'>Settings</Link>
                </nav>
                <Outlet />
        </div>
     ) : (  <div>
            <Loggedout />
            </div>
    ))

}
export default Home;