import React from 'react';

function Menu(props) {
    return (
        <div>
            <strong style={{ color:'#FFFFFF', fontSize: '13px', lineHeight: '16.8px' }} >{props.menu}</strong>
        </div>
    )
}

export default Menu;