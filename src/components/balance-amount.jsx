import React from 'react';

function BalanceAmount(props) {
    return (
        <div style={{
            position: 'absolute',
            top: '85px', left: '20px'
        }} >
            <h1 style={{ marginBottom: '5px' }}>{props.balanceAmount}</h1>
        </div>
    )
}

export default BalanceAmount;