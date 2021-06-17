import React from 'react';
import NavBar from './nav-bar';
import SideBar from './side-bar';
import MobileNavBar from './mobile-nav-bar';
import Welcome from './welcome';
import Account from './account';
import rectangle2 from '../images/Rectangle 2.png';
import rectangle7 from '../images/Rectangle 7.png';
import Summary from './summary';
import CashOutFlow from './cash-outflow';
import Transactions from './transactions';

function Dashboard() {
    return (
        <div>
            <NavBar />
            <MobileNavBar />
            <SideBar />
            <main>
                <Welcome />
                <div style={{ position: 'absolute', top: '166px' }} >
                    <Account balance='N814,800' accountType='CURRENT ACCOUNT' bankAccount='PROVIDUS BANK - 9906533917' icon={rectangle2} />
                    <Account balance='N39,342' accountType='SAVINGS ACCOUNT' bankAccount='SUB ACCOUNT - 12346789' icon={rectangle7} />
                </div>
                <div style={{ position: 'absolute', top: '365px' }}>
                    <Summary />
                    <CashOutFlow />
                </div>
                <div style={{ position: 'absolute', top: '786px' }}>
                    <Transactions />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;