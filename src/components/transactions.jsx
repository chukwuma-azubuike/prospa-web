import React, { useState } from 'react';
import transferFee from '../images/Transfer Fee.png';
import beneficiary from '../images/beneficiary.png';
import { useMediaQuery } from 'react-responsive';

function Transactions(props) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

    return (
        <div>
            {isBigScreen &&
                <div style={{
                    background: '#FFFFFF', height: '350px', width: '930px',
                    margin: '10px 15px', padding: '20px',
                    float: 'left', borderRadius: '4px',
                    boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                }} >
                    <a href='' style={{ textDecoration: 'none', color: '#FA4A84' }}>
                        <div style={{
                            width: '71px', background: '#FFFFFF', border: '1px solid #FA4A84', padding: '10px',
                            color: '#FA4A84', textAlign: 'center', borderRadius: '4px',
                            position: 'absolute',
                            right: '42px', top: '40px'
                        }} >
                            <span>See all</span>
                        </div>
                    </a>
                    <p style={{ fontSize: '14px', margin: '20px auto 20px' }} >Recent Transactions</p>

                    <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={transferFee} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 25px', color: '#1C1335' }} >Transfer Fee
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N145.90</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#1C1335' }} >Adam Chapman
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 45px auto 25px', color: '#1C1335' }} >Shirley Barnes
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#1C1335' }} >Shirley Barnes
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '40px', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div className='graph-summary' >

                    </div>
                </div>
            }
            {isTabletOrMobile &&
                <div style={{
                    background: '#FFFFFF', height: '350px', width: '78%',
                    margin: '10px 6%', padding: '5%',
                    float: 'left', borderRadius: '4px',
                    boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                }} >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <p style={{ fontSize: '14px' }} >Recent Transactions</p>
                        <a href='' style={{ textDecoration: 'none', color: '#FA4A84' }}>
                            <div style={{
                                width: '71px', background: '#FFFFFF', border: '1px solid #FA4A84', padding: '10px',
                                color: '#FA4A84', textAlign: 'center', borderRadius: '4px'
                            }} >
                                <span>See all</span>
                            </div>
                        </a>
                    </div>

                    <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={transferFee} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 15px', color: '#1C1335' }} >Transfer Fee
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '11%', fontSize: '14px' }} >-N145.90</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 15px', color: '#1C1335' }} >Adam Chapman
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '11%', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 15px', color: '#1C1335' }} >Shirley Barnes
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '11%', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex' }} >
                        <span> <img style={{ width: '35px' }} src={beneficiary} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 15px', color: '#1C1335' }} >Shirley Barnes
                            <p style={{ fontSize: '10px', color: '#8397AB', fontWeight: 'normal' }} >12:49 AM</p>
                        </span>
                        <span style={{ position: 'absolute', right: '11%', fontSize: '14px' }} >-N2,000.00</span>
                    </div>
                    <div className='graph-summary' >

                    </div>
                </div>
            }
        </div>
    );
}

export default Transactions;