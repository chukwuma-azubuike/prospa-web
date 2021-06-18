import React, { useState } from 'react';
import '../index.css';


function SideIntroPanel() {

    const [reveal, setReveal] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        reveal ? setReveal(false) : setReveal(true);
    }

    return (
        < nav className='side-intro-panel'>

        </nav >
    )
}
export default SideIntroPanel;