import React, { useState } from 'react';
import '../index.css';
import logo from '../images/prospa logo black.png';
import accounts from '../images/accounts.png';
import transfer from '../images/wallet.png';
import invoice from '../images/invoice.png';
import management from '../images/management.png';
import bn from '../images/BN.png';
import downArrow from '../images/arrow down.png';


function SideBar() {

    const [highlight, setHighlight] = useState(false);

    function highlightFunc() {
        setHighlight(true)
    }

    return (
        < nav className='side-bar'>
            <div style={{ height: '80px', width: '300px', borderBottom: '1px solid #D8D8D8' }} >
                <div style={{ position: 'absolute', top: '20px', left: '32px', width: '230px', height: '40px' }} >
                    <img src={bn} style={{ width: '40px' }} />
                    <span style={{
                        position: 'absolute', top: '0',
                        left: '52px', width: '102px', color: '#1B003B'
                    }} >Clayvant Inc <br /> <a href='' style={{
                        color: '#8397AB', fontSize: '12px'
                    }} >Manage account</a></span>
                    <a href=''> <img src={downArrow} style={{ width: '40px', position: 'absolute', right: '0' }} /> </a>
                </div>
            </div>
            <ul style={{ position: 'absolute', top: '100px'}} >
                <a href=''><li> <img src={accounts} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /><span style={{ fontSize: 14, color: '#FA4A84' }} >Accounts</span></li></a><span style={{ fontSize: 11 }} ></span>
                <a href=''><li> <img src={transfer} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >transfers</span></li></a>
                <a href=''><li> <img src={invoice} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Invoice</span></li></a>
                <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Management</span></li></a>
                <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Security</span></li></a>
                <a href=''><li> <img src={management} className='list-icon' style={{ width: '24px', color: '#FFFFFF' }} /> <span style={{ fontSize: 14, color: '#8397AB' }} >Support</span></li></a>
            </ul>
            <img src={logo} alt="Logo" style={{ width: '108.95px', position: 'absolute', left: '32px', bottom: '32px' }} />
        </nav >
    )
}
export default SideBar;