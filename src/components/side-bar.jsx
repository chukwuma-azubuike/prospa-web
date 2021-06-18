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

    const [reveal, setReveal] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        reveal ? setReveal(false) : setReveal(true);
    }

    return (
        < nav className='side-bar'>
            <div style={{

                position: 'absolute', top: '70px', right: '22px', background: '#FFFFFF', zIndex: '15',
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
            <div style={{ height: '80px', width: '300px', borderBottom: '1px solid #D8D8D8' }} >
                <div style={{ position: 'absolute', top: '20px', left: '32px', width: '230px', height: '40px' }} >
                    <img src={bn} style={{ width: '40px' }} />
                    <span style={{
                        position: 'absolute', top: '0',
                        left: '52px', width: '102px', color: '#1B003B'
                    }} >Clayvant Inc <br /> <a href='' style={{
                        color: '#8397AB', fontSize: '12px'
                    }} >Manage account</a></span>
                    <a href='' onClick={handleClick} onAuxClick={() => {
                        setReveal(false);
                    }} >
                        <img src={downArrow} style={{ transition: 'all 0.3s', transform: reveal ? 'rotate(180deg)' : 'rotate(0deg)', width: '40px', position: 'absolute', right: '0' }} /> </a>
                </div>
            </div>
            <ul style={{ position: 'absolute', top: '100px' }} >
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