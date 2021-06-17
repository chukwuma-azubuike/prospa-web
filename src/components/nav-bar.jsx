import React, { useState } from 'react';
import '../index.css';
import notification from '../images/notification.png';
import user from '../images/user.png'

function NavBar() {
    const [sideBar, setSideBar] = useState(false)

    function handleClick() {
        setSideBar(false)
    }

    return (
        <div>
            <div className='nav-bar'>
                
                <div>
                    <span style={{color:'#8397AB', left: '390px', position: 'absolute', top: '26px', fontSize: '21px' }} ><strong>Dashboard</strong>
                    </span>
                    <span style={{ right: '90px', position: 'absolute', top: '20px', fontSize: '15px' }}>
                        <img src={notification} alt="notification" style={{ width: '40px', marginRight: '30px' }} />
                        <img src={user} alt="user" style={{ width: '40px'}} />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default NavBar;