import React from 'react';

function Welcome() {
    return (
        <div style={{ width: '960px', height: '52px' }} >
            <div>
                <h1>Welcome back, Kathy</h1>
                <p>Here's what has been happening for the past <a style={{ textDecoration: 'underline', color: '#FA4A84' }}>7 days</a> </p>
            </div>
            <div style={{ height: '44px', width: '171px', background: '#FA4A84', color: '#FFFFFF', right: '0', textAlign: 'center' }} >
                Add a sub account
            </div>
        </div>
    )
}

export default Welcome;