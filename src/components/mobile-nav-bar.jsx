import React, { useState } from 'react';
import '../index.css';
import accounts from '../images/accounts.png';
import transfer from '../images/wallet.png';
import invoice from '../images/invoice.png';
import management from '../images/management.png';
import logo from '../images/prospa logo white.png';
import notification from '../images/notification.png';
import user from '../images/user.png'


function NavBar() {
    const [sideBar, setSideBar] = useState(false)

    function handleClick() {
        setSideBar(false)
    }

    return (
        <div>
            <div className='mobile-side-div'
                style={{ left: sideBar ? '0' : '-300px', transition: 'all 0.3s' }}>
                <nav className='side-bar' style={{ display: 'block', zIndex: 4, height: sideBar && '1030px' }}>
                    <div style={{ fontSize: '0', background: '#FFFFFF' }}>
                        <img src={notification} alt="notification" style={{ width: '40px', margin: '10px' }} />
                        <img src={user} alt="user" style={{ width: '40px', position: 'absolute', right: '10px', top: '10px' }} />
                    </div>
                    <ul>
                        <a href=''><li> <img src={accounts} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /><span style={{ fontSize: 14, color: '#FA4A84' }} >Accounts</span></li></a>
                        <a href=''><li> <img src={transfer} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >transfers</span></li></a>
                        <a href=''><li> <img src={invoice} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Invoice</span></li></a>
                        <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Management</span></li></a>
                        <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Security</span></li></a>
                        <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Support</span></li></a>
                    </ul>
                </nav>

            </div>
            <div
                className='dark-overlay'
                style={{
                    display: sideBar ? 'block' : 'none',
                    zIndex: 13, backgroundColor: 'black',
                    opacity: 0.6, height: '100%', width: '100%',
                    position: 'fixed',
                    top: '0'
                }}
                onClick={handleClick}>
            </div>
            <nav className='mobile-nav-bar'>
                <div className='burger-icon-div' onClick={() => {
                    setSideBar(true)
                }}>
                    <a href="javascript:void(0);" class="burger-icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div className='nav-title'>
                    <img className='nav-logo' src={logo} alt="Logo" />
                </div>
            </nav>
        </div>
    )
}
export default NavBar;