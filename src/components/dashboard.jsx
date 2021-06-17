import React from 'react';
import NavBar from './nav-bar';
import SideBar from './side-bar';
import MobileNavBar from './mobile-nav-bar';
import Welcome from './welcome';

function Dashboard() {
    return (
        <div>
            <NavBar />
            <MobileNavBar />
            <SideBar />
            <main>
                <Welcome />
            </main>
        </div>
    );
}

export default Dashboard;