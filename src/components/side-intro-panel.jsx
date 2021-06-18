import React, { useState } from 'react';
import '../index.css';
import whiteLogo from '../images/prospa logo white.png';
import vault from '../images/vault.png'


function SideIntroPanel() {

    const [reveal, setReveal] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        reveal ? setReveal(false) : setReveal(true);
    }

    return (
        < nav className='side-intro-panel'>
            <div>
                <img style={{ width: '108.95px' }} src={whiteLogo} />
            </div>
            <div style={{ position: 'absolute', top: '112px' }} >
                <div style={{ position: 'absolute', left: '0px', width: '61.2px', height: '1.5px', background: '#FFFFFF', borderRadius: '4px' }} ></div>
                <div style={{ position: 'absolute', left: '66.2px', width: '61.2px', height: '1.5px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} ></div>
                <div style={{ position: 'absolute', left: '132.4px', width: '61.2px', height: '1.5px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} ></div>
                <div style={{ position: 'absolute', left: '198.6px', width: '61.2px', height: '1.5px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} ></div>
                <div style={{ position: 'absolute', left: '264.8px', width: '61.2px', height: '1.5px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} ></div>
            </div>
            <div style={{ width: '250px', fontWeight: '100', position: 'absolute', top: '170px' }} >
                <h1 style={{ fontSize: '32px', lineHeight: '43px', marginBottom: '0' }} >Create multiple sub-account</h1>
                <p style={{ fontSize: '13px', fontWeight: '100' }} >
                    Organise your business finances easily
                    with multiple accounts. No limits!
                </p>
                <img src={vault} style={{ width: '310px', margin: '50px 12px' }} />
                <p style={{ position: 'absolute', bottom: '0', left: '-12px', fontSize: '10px' }} >© 2020 Prospa Inc</p>
            </div>
        </nav >
    )
}
export default SideIntroPanel;