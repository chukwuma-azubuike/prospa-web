import React, { useState } from 'react';
import '../index.css';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import logo from '../images/prospa logo white.png';
import Menu from './menu';
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
                        <li><Menu menu='Main pages' /> </li>
                        <a href=''><li> <DashboardOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Dashboard</span> </li></a>
                        <a href=''><li> <AccountBalanceWalletOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Balances</span></li></a><span style={{ fontSize: 11 }} ></span>
                        <a href=''><li> <PeopleAltOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Customers</span></li></a>
                        <a href=''><li> <TimelineOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Analytics</span></li></a>
                        <li><Menu menu='General' /> </li>
                        <a href=''><li> <TuneOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Settings</span></li></a>
                        <a href=''><li> <StarOutlineRoundedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Team</span></li></a>
                        <a href=''><li> <PhoneOutlinedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Contact</span></li></a>
                        <a href=''><li> <ExitToAppRoundedIcon className='list-icon' style={{ fontSize: 20 }} /> <span style={{ fontSize: 11 }} >Logout</span></li></a>
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