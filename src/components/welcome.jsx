import React from 'react';

function Welcome() {
    return (
        <div style={{ width: '960px', height: '52px', marginTop: '80px' }} >
            <div style={{ }} >
                <h2 style={{ marginBottom: '5px', fontWeight: 'light' }} >Welcome back, Kathy</h2>
                <p>Here's what has been happening for the past <a style={{ textDecoration: 'underline', color: '#FA4A84' }}>7 days</a> </p>
            </div>
            <div style={{
                width: '171px', background: '#FA4A84', padding: '12px',
                color: '#FFFFFF', textAlign: 'center', borderRadius: '4px',
                position: 'absolute',
                right: '126px', top:'106px'
            }} >
                <span style={{}} >Add a sub account</span>
            </div>
        </div>
    )
}

export default Welcome;