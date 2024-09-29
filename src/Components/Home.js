import React from "react";
import { Link, Outlet } from "react-router-dom";
function Home() {
    return(
        <div>
            <h2>Dashboard</h2>
                <nav>
                    <Link to = 'profile'>Profile</Link>
                    <Link to = 'settings'>Settings</Link>
                </nav>
                <Outlet />
        </div>)
}
export default Home;