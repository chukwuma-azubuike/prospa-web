import React from 'react';
import pink from '../images/bank fees.png';
import teal from '../images/internet.png';
import purple from '../images/marketing.png';
import green from '../images/transfer.png';

function Summary(props) {
    return (
        <div style={{
            background: '#FFFFFF', height: '350px', width: '372px',
            margin: '10px 15px', padding: '20px',
            float: 'left', borderRadius: '4px',
            boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
        }} >
            <p style={{ fontSize: '14px', marginBottom: '15px' }} >Cash outflow</p>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={pink} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 25px', color: '#8397AB' }} >Banking Fees</span>
                <div>
                    <p>- N 250,000</p>
                    <div style={{
                        width: '190px', height: '6px', background: '#EEEFF7',
                        borderRadius: '4px', right: '52px', top: '112px', position: 'absolute'
                    }} >
                    </div>
                    <div style={{
                        width: '174px', height: '6px', background: '#FFCF56',
                        borderRadius: '4px', right: '68px', top: '112px', position: 'absolute'
                    }} >
                    </div>
                </div>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={teal} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#8397AB' }} >Internet</span>
                <div>
                    <p>- N 250,000</p>
                    <div style={{
                        width: '190px', height: '6px', background: '#EEEFF7',
                        borderRadius: '4px', right: '52px', top: '192px', position: 'absolute'
                    }} >
                    </div>
                    <div style={{
                        width: '128px', height: '6px', background: '#FFCF56',
                        borderRadius: '4px', right: '114px', top: '192px', position: 'absolute'
                    }} >
                    </div>
                </div>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={purple} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 45px auto 25px', color: '#8397AB' }} >Marketing</span>
                <div>
                    <p>- N 250,000</p>
                    <div style={{
                        width: '190px', height: '6px', background: '#EEEFF7',
                        borderRadius: '4px', right: '52px', top: '272px', position: 'absolute'
                    }} >
                    </div>
                    <div style={{
                        width: '72px', height: '6px', background: '#FFCF56',
                        borderRadius: '4px', right: '170px', top: '272px', position: 'absolute'
                    }} >
                    </div>
                </div>
            </div>
            <div style={{ marginRight: '50px', padding: '20px 0', width: '370px', alignItems: 'center', display: 'flex' }} >
                <span> <img style={{ width: '35px' }} src={green} /> </span>
                <span style={{ fontSize: '12px', margin: 'auto 57px auto 25px', color: '#8397AB' }} >Transfer</span>
                <div>
                    <p>- N 250,000</p>
                    <div style={{
                        width: '190px', height: '6px', background: '#EEEFF7',
                        borderRadius: '4px', right: '52px', top: '352px', position: 'absolute'
                    }} >
                    </div>
                    <div style={{
                        width: '39px', height: '6px', background: '#FFCF56',
                        borderRadius: '4px', right: '203px', top: '352px', position: 'absolute'
                    }} >
                    </div>
                </div>
            </div>
            <div className='graph-summary' >

            </div>
        </div>
    );
}

export default Summary;