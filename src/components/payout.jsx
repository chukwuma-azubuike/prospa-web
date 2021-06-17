import React from 'react';
// import search from '../images/Search.png';
import PayoutItems from './payout-items';

function Payout(props) {

    let payouts = [
        { payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '5th July, 2021', amount: '$1200' },
        { payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '5th July, 2021', amount: '$1200' },
        { payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '5th July, 2021', amount: '$1200' },
        { payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '5th July, 2021', amount: '$1200' }
    ]

    var date = new Date;
    var today = date.getMonth();

    return (
        <div className='payout'>
            <div>
                <span className='payout-header' ><strong>Payout table</strong></span>
                <span className='search-span'>
                    <input className='search-input' placeholder='Search something...'></input>
                    {/* <img src={search} alt="search" style={{ position: 'absolute', top: '15px', right: '15px' }} /> */}
                </span>
                <input className='calendar' type="month" value='2021-06' name="calendar"></input>
                <a href='' className='payout-button' >
                    <div>
                        <strong>Payout</strong>
                    </div>
                </a>
            </div>
            <div className='payout-table-header'>
                <span id='payout-id' className='payout-table-header-items'><strong>Payout ID</strong></span>
                <span id='source' className='payout-table-header-items'><strong>Source</strong></span>
                <span id='date' className='payout-table-header-items'><strong>Date</strong></span>
                <span id='amount' className='payout-table-header-items' ><strong>Amount</strong></span>
            </div>
            <div className='payout-items-container'>
                <table style={{ listStyle: 'none', margin: '0' }} >
                    {payouts.map((item) => {
                        return <li style={{ lineHeight: '16px' }}>
                            <PayoutItems payoutId={item.payoutId} source={item.source} date={item.date} amount={item.amount} />
                        </li>
                    })}
                </table>
            </div>
            <a href='' style={{ textDecoration: 'none' }}>
                <div className='see-more'>
                    <span style={{ textDecoration: 'none', margin: 'auto', fontSize: '14px', color: '#2C665D' }} >
                        <strong>See more</strong>
                    </span>
                </div></a>
        </div>
    )
}

export default Payout;