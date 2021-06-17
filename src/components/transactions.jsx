import React, { useState } from 'react';
import transferFee from '../images/Transfer Fee.png';
import beneficiary from '../images/beneficiary.png';


function Transactions(props) {

    return (
        <div style={{
            background: '#FFFFFF', height: '350px', width: '930px',
            margin: '10px 15px', padding: '20px',
            float: 'left', borderRadius: '4px',
            boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
        }} >
            <div style={{
                width: '71px', background: '#FFFFFF', border: '1px solid #FA4A84', padding: '10px',
                color: '#FA4A84', textAlign: 'center', borderRadius: '4px',
                position: 'absolute',
                right: '42px', top: '40px'
            }} >
                <span style={{}} >See all</span>
            </div>
            <p style={{ fontSize: '14px', margin: '20px auto 20px' }} >Recent Transactions</p>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={transferFee} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 25px', color: '#8397AB' }} >Transfer Fee</span>
                <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N145.90</span>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#8397AB' }} >Adam Chapman</span>
                <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 45px auto 25px', color: '#8397AB' }} >Shirley Barnes</span>
                <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#8397AB' }} >Shirley Barnes</span>
                <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
            </div>
            <div className='graph-summary' >

            </div>
        </div>
    );
}

export default Transactions;