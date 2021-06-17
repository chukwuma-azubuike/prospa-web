import React from 'react';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Balance from './components/balance';
import Payout from './components/payout';
import MobileNavBar from './components/mobile-nav-bar';

// import Header from './components/header';

function App() {

  return (
    <div>
      <NavBar />
      <MobileNavBar />
      <SideBar />
      <main>
        <Balance />
        <Payout />
      </main>
    </div>
  );
}

export default App;