import React from 'react';
import { useMediaQuery } from 'react-responsive';
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

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

    function splitDecimalString(string) {
        let splitString = string.split('.');
        return {
            int: splitString[0],
            dec: splitString[1]
        };
    }
    return (
        <div>
            {isBigScreen &&
                <div>
                    <NavBar />
                    <MobileNavBar />
                    <SideBar />
                    <main className='dashboard-main'>
                        <Welcome />
                        <div style={{ position: 'absolute', top: '166px', width: '996px' }} >
                            <Account balance={splitDecimalString('814800.80').int} padding='20px' margin='10px 15px' width='427px' decimal={splitDecimalString('814800.16').dec}
                                accountType='CURRENT ACCOUNT' bankAccount='PROVIDUS BANK - 9906533917' icon={rectangle2} />
                            <Account balance={splitDecimalString('39342.45').int} padding='20px' margin='10px 15px' width='427px' decimal={splitDecimalString('39342.45').dec}
                                accountType='SAVINGS ACCOUNT' bankAccount='SUB ACCOUNT - 12346789' icon={rectangle7} />
                        </div>
                        <div style={{ position: 'absolute', top: '365px', width: '82%' }}>
                            <Summary />
                            <CashOutFlow />
                        </div>
                        <div style={{ position: 'absolute', top: '786px' }}>
                            <Transactions />
                        </div>
                    </main>
                </div>
            }
            {isTabletOrMobile &&
                <div>
                    <MobileNavBar />
                    <main className='dashboard-main-res' id='dashboard-res'>
                        <Welcome />
                        <div style={{ position: 'relative', top: '38px', width: '80%' }} >
                            <Account balance={splitDecimalString('814800.80').int} padding='5%' margin='10px 8%' width='100%' decimal={splitDecimalString('814800.16').dec}
                                accountType='CURRENT ACCOUNT' bankAccount='PROVIDUS BANK - 9906533917' icon={rectangle2} />
                            <Account balance={splitDecimalString('39342.45').int} padding='5%' margin='10px 8%' width='100%' decimal={splitDecimalString('39342.45').dec}
                                accountType='SAVINGS ACCOUNT' bankAccount='SUB ACCOUNT - 12346789' icon={rectangle7} />
                        </div>
                        <div style={{ position: 'relative', top: '46px', width: '80%' }}>
                            <Summary />
                            <CashOutFlow />
                        </div>
                        <div style={{ position: 'relative', top: '48px' }}>
                            <Transactions />
                        </div>
                    </main>
                </div>
            }
        </div>
    );
}

export default Dashboard;