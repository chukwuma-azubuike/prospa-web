import React from 'react';
import { useMediaQuery } from 'react-responsive';


function Welcome() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

    return (
        <div>
            {isBigScreen &&
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
                </div>}
            {isTabletOrMobile &&
                <div style={{ width: '85%', height: '52px', margin: '46px 8%' }} >
                    <div style={{marginBottom:'30px'}} >
                        <h3 style={{ margin: '0', marginBottom: '5px', fontWeight: '100' }} >Welcome back, Kathy</h3>
                        <p style={{ fontWeight: '100', fontSize: '12px' }}>Here's what has been happening for the past <a style={{ textDecoration: 'underline', color: '#FA4A84' }}> 7 days</a> </p>
                    </div>
                    <div>
                        <a href='' style={{ textDecoration: 'none', color: '#FFFFFF' }} >
                            <div style={{
                                width: '171px', background: '#FA4A84', padding: '12px',
                                color: '#FFFFFF', textAlign: 'center', borderRadius: '4px',
                            }} >
                                <span>Add a sub account</span>
                            </div>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Welcome;