import React from 'react';

function BalanceTitle(props) {
    return (
        <p style={{
            position: 'absolute',
            top: '25px',
            left: '20px',
            fontSize: '12px',
            color: '#2C665D'
        }} >{props.balanceTitle}</p>
    )
}

export default BalanceTitle;