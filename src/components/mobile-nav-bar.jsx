import React, { useState } from 'react';
import '../index.css';
import accounts from '../images/accounts.png';
import transfer from '../images/wallet.png';
import invoice from '../images/invoice.png';
import management from '../images/management.png';
import logo from '../images/prospa logo black.png';
import notification from '../images/notification.png';
import user from '../images/user.png'
import bn from '../images/BN.png';
import downArrow from '../images/arrow down.png';


function NavBar() {

    const [sideBar, setSideBar] = useState(false)

    function handleClick() {
        setSideBar(false)
    }

    const [reveal, setReveal] = useState(false);

    function handleClick1(e) {
        e.preventDefault();
        reveal ? setReveal(false) : setReveal(true);
    }

    return (
        <div>
            <div className='mobile-side-div'
                style={{ left: sideBar ? '0' : '-300px', transition: 'all 0.3s' }}>
                <nav className='side-bar' style={{ display: 'block', zIndex: 20, height: sideBar && '1030px', background: '#F4F8FB' }}>
                    <div style={{ fontSize: '0', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={notification} alt="notification" style={{ width: '40px', margin: '10px 20px' }} />
                        <img src={user} alt="user" style={{ width: '50px', height: '50px', margin: '10px 20px' }} />
                    </div>
                    <div style={{
                        position: 'absolute', top: '142px', right: '22px', background: '#FFFFFF', zIndex: '15',
                        width: '257.5px', height: '160px', borderRadius: '4px',
                        boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                        display: reveal ? 'block' : 'none', transition: 'all 0.5s',
                    }} >
                        <div className='accounts' style={{ textAlign: 'center', color: '#1C1335', display: 'flex', alignItems: 'center', height: '25%', width: '100%', borderBottom: '1px solid #EEEFF7' }} >
                            <p style={{ margin: '0 20px' }} >Clayvant Inc</p>
                        </div>
                        <div className='accounts' style={{ color: '#8397AB', display: 'flex', alignItems: 'center', height: '25%', width: '100%', borderBottom: '1px solid #EEEFF7' }}>
                            <p style={{ fontSize: '12px', margin: '0 20px' }} >Business name 2</p>
                        </div>
                        <div className='accounts' style={{ color: '#8397AB', display: 'grid', alignItems: 'center', height: '50%', width: '100%' }}>
                            <p style={{ fontSize: '12px', margin: '0 20px' }} >Business name 3</p>
                            <p style={{ margin: '0 20px', color: '#FA4A84', fontWeight: 'lighter', fontSize: '10px' }} ><a href='' >Add a business</a></p>
                        </div>
                    </div>
                    <div style={{
                        height: '80px', width: '300px', borderBottom: '1px solid #D8D8D8', borderTop: '1px solid #D8D8D8', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', background: '#FFFFFF'
                    }} >
                        <div style={{ position: 'relative', width: '230px', height: '40px' }} >
                            <img src={bn} style={{ width: '40px' }} />
                            <span style={{
                                position: 'absolute', top: '0',
                                left: '52px', width: '102px', color: '#1B003B'
                            }} >Clayvant Inc <br /> <a href='' style={{
                                color: '#8397AB', fontSize: '12px'
                            }} >Manage account</a></span>
                            <a href='' onClick={handleClick1} onAuxClick={() => {
                                setReveal(false);
                            }} >
                                <img src={downArrow} style={{ transition: 'all 0.3s', transform: reveal ? 'rotate(180deg)' : 'rotate(0deg)', width: '40px', position: 'absolute', right: '0' }} /> </a>
                        </div>
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
                {/* <div className='nav-title'> */}
                    <img className='nav-logo' src={logo} alt="Logo" />
                {/* </div> */}
            </nav>
        </div>
    )
}
export default NavBar;