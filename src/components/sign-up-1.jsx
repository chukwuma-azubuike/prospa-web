import React from 'react';
import SideIntroPanel from './side-intro-panel';

function SignUp1() {
    return (
        <div>
            <SideIntroPanel />
            <main style={{ height: '100%', background: '#FFFFFF' }} >
                <div style={{ margin: '150px auto', width: '376px' }}>
                    <p style={{ fontSize: '10px', position: 'absolute', right: '96px', top: '37px' }} >Already a member?
                        <a href='' style={{ textDecoration: 'none', color: '#FA4A84' }} >  Sign In</a></p>
                    <form className='sign-up-form' >
                        <h2 style={{ margin: '0' }} >Open a new business account</h2>
                        <p style={{ color: '#8397AB', fontSize: '14px', fontWeight: '100' }} >A short description comes here</p>
                        <input type='radio' name='cac'></input>
                        <label style={{}} for='cac' >
                            <div style={{ display: 'inline-block', background: 'red' }} >
                                I have a registered business /charity with CAC
                            </div>
                        </label>
                        <button type='submit'
                            onClick={(e) => {
                                e.preventDefault();
                            }} >Next
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default SignUp1;