import React from 'react';

function Welcome() {
    return (
        <div style={{ width: '960px', height: '52px', marginTop: '100px', display: 'flex', alignItems: 'center' }} >
            <div style={{ display: 'inline-block', marginRight: '460px' }} >
                <h3 style={{ margin: '0', marginBottom: '5px', fontWeight: '100' }} >Welcome back, Kathy</h3>
                <p style={{ fontWeight: '100', fontSize: '12px' }}>Here's what has been happening for the past <a style={{ textDecoration: 'underline', color: '#FA4A84' }}> 7 days</a> </p>
            </div>
            <a href='' style={{ textDecoration: 'none', color: '#FFFFFF' }} >
                <div style={{
                    width: '171px', background: '#FA4A84', padding: '12px',
                    color: '#FFFFFF', textAlign: 'center', borderRadius: '4px',
                }} >
                    <span>Add a sub account</span>
                </div>
            </a>
        </div>
    )
}

export default Welcome;