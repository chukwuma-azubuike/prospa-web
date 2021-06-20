import React, { useState } from 'react';
import SideIntroPanel from './side-intro-panel';
import AccountChoice from './account-choice';
function SignUp1() {

    const [check1, setChecked1] = useState(false);

    function checker() {

        var radio1 = document.getElementById('option1');
        var radio2 = document.getElementById('option2');
        var radio3 = document.getElementById('option3');

        if (radio1.checked == true) {
            setChecked1(true);
        }
    }

    return (
        <div>
            <SideIntroPanel />
            <main style={{ height: '100%', background: '#FFFFFF' }} onLoad={() => {

            }} >
                <div style={{ margin: '150px auto', width: '376px' }}>
                    <p style={{ fontSize: '10px', position: 'absolute', right: '96px', top: '37px' }} >Already a member?
                        <a href='' style={{ textDecoration: 'none', color: '#FA4A84' }} >  Sign In</a></p>
                    <form className='sign-up-form' >
                        <h2 style={{ margin: '0' }} >Open a new business account</h2>
                        <p style={{
                            marginBottom: '30px',
                            color: '#8397AB', fontSize: '14px', fontWeight: '100'
                        }} >A short description comes here</p>
                        <AccountChoice checker={checker} check1={check1} header='I have a registered business / charity with CAC'
                            subHeader='As a registered business you’ll get:' tick1='Account in your business name' tick2='Send to and receive transfers from all
                                Nigerian banks' tick3='Tools for business management' />
                        <AccountChoice checker={checker} check1={check1} header='My business is not yet registered, I would like to register'
                            subHeader='Everything you need to start your business' tick1='Registered business name with the CAC' tick2='Tax identification number'
                            tick3='Your account will be automatically opened on completion' />
                        <AccountChoice checker={checker} check1={check1} header='I’m a freelancer I do business in my personal name' />
                        <button type='submit'
                            onClick={(e) => {
                                e.preventDefault();
                            }} >Next
                        </button>
                    </form>
                </div>
            </main>
        </div >
    );
}

export default SignUp1;