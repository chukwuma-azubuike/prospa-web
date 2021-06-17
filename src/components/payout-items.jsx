import React from 'react';

function PayoutItems(items) {
    return (
        <div
            className='payout-items'>
            <span className='payout-entries' id='' style={{ position: 'absolute', left: '20px', fontSize: '14px' }} >{items.payoutId}</span>
            <span className='payout-entries-disappear' style={{ position: 'absolute', left: '315px', fontSize: '14px' }} >{items.source}</span>
            <span className='payout-entries-disappear' style={{ position: 'absolute', left: '663px', fontSize: '14px' }} >{items.date}</span>
            <span className='payout-entries' id='' style={{ position: 'absolute', right: '30px', fontSize: '14px' }} >{items.amount}</span>
        </div>
    )
}

export default PayoutItems;