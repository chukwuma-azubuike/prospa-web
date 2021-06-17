import React from 'react';
import Currency from '../components/currencies';
import BalanceTitle from '../components/balance-title';
import BalanceAmount from '../components/balance-amount';

function Balance(props) {
    return (
        <div style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center'
        }} >
            {/* <div> */}
                <div className='balance-header' ><strong>Balances</strong>
                    <p style={{ fontSize: '9px', marginTop: '5px', color: '#A6ABB2' }} >Today, 4th June, 2021</p>
                </div>
            {/* </div> */}
            <div className='balance'>
                <BalanceTitle balanceTitle='Total Account Balance' />
                <div className='balance-currencies'>
                    <select type='options' style={{
                        borderColor: '#F5F5F5', width: '68px', height: '25px', backgroundColor: '#F5F5F5', borderRadius: '4px'
                    }} >
                        <option>USD</option>
                        <option>KES</option>
                        <option>NGN</option>
                        <option>GHC</option>
                    </select>
                </div>
                <div className='fonds-on-hold' >
                    <BalanceTitle balanceTitle='Funds on Hold' />
                    <BalanceAmount balanceAmount='$5,332.18' />
                </div>
                <div className='div-line' />
                <div className='currency-list'>

                    <Currency currency='KES' border='none none 1px none' borderline='1px solid #EBEBEB' />
                    <Currency currency='NGN' border='none none 1px none' borderline='1px solid #EBEBEB' />
                    <Currency currency='GHC' border='none' borderline='none' />
                </div>
                <div style={{
                    position: 'absolute',
                    top: '70px', left: '20px',
                    textAlign: 'left',
                }} >
                    <h1 style={{ marginBottom: '5px' }}>$5,332.18</h1>
                    <p style={{ fontSize: '12px', color: '#A6ABB2' }} >1 USD = 381.97 NGN</p>
                </div>
            </div>
            <div className='fonds-on-hold-responsive' >
                <BalanceTitle balanceTitle='Funds on Hold' />
                <BalanceAmount balanceAmount='$5,332.18' />
            </div>
        </div>

    )
}

export default Balance;