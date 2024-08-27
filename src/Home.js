import React from "react";
import { Link, Outlet } from "react-router-dom";
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
     ) : (<div>
            <h2>You need to Login to view this page :D</h2>
        </div>))

}
export default Home;