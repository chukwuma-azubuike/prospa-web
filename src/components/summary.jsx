import React from 'react';

function Summary(props) {
    return (
        <div style={{
            background: '#FFFFFF', height: '350px', width: '486px',
            margin: '10px 15px', padding: '20px',
            float: 'left', borderRadius: '4px',
            boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
        }} >
            <p style={{ fontSize: '14px', marginBottom: '15px' }} >June Summary</p>
            <div style={{ float: 'left', marginRight: '50px' }} >
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Money in</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div style={{ float: 'left', marginRight: '50px' }}>
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Money out</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div style={{ float: 'left', marginRight: '50px' }}>
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Difference</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div className='graph-summary' >

            </div>
        </div>
    );
}

export default Summary;