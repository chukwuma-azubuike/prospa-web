import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import vault from '../images/vault.png'

function SignUpForm() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' })

    return (
        <div>
            {isBigScreen &&
                <div style={{ margin: '150px auto', width: '376px' }}>
                    <p style={{ fontSize: '10px', position: 'absolute', right: '96px', top: '37px' }} >Don't have an account?
                        <Link to='/signup' href='' style={{ textDecoration: 'none', color: '#FA4A84' }} >  Sign Up</Link></p>
                    <form className='sign-up-form' >
                        <h1>Welcome back to Prospa</h1>
                        <p style={{ color: '#8397AB', fontSize: '14px', fontWeight: '100', marginBottom: '20px' }} >An account, with powerful, personalised tools
                            all in one place</p>
                        <input type='email' name='email' class='EM' />
                        <span class="floating-label-EM EM">Email</span>
                        <input type='password' name='password' class='PW' />
                        <span class="floating-label-PW">Password</span>
                        <Link to='/dashboard' style={{ width: 'inherit' }} >
                            <button type='submit'
                                onClick={(e) => {
                                }} >Next
                            </button>
                        </Link>
                    </form>
                </div>
            }
            {
                isTabletOrMobile &&
                <div style={{ margin: '0px auto', width: '80%', height: '100px' }}>
                    <p style={{ fontSize: '10px', margin: 'auto' }} >Don't have an account?
                        <Link to="/signup" href='' style={{ textDecoration: 'none', color: '#FA4A84' }} >  Sign Up</Link></p>
                    <form id='sign-up-form-resp' className='sign-up-form' >
                        <h1>Welcome back to Prospa</h1>
                        <p style={{ color: '#8397AB', fontSize: '14px', fontWeight: '100' }} >An account, with powerful, personalised tools
                            all in one place</p>
                        <div>
                            <input type='email' name='email' class='EM' placeholder='Email' />
                            <input type='password' name='password' class='PW' placeholder='Password' />
                        </div>
                        <Link to='/signupnext' style={{ width: 'inherit', margin: 'auto' }} >
                            <button type='submit'
                                onClick={(e) => {
                                }} >Next
                            </button>
                        </Link>
                    </form>
                    <div style={{
                        width: '100%', height: 'fit-content', paddingBottom: '40px', paddingTop: '10px',
                        color: '#FFFFFF', background: '#1C1335', marginTop: '30px',
                    }} >
                        <div style={{ width: '100%', fontWeight: '100' }} >
                            <div style={{ display: 'inline-block', width: '50%', margin: 'auto 18px 30px 18px' }} >
                                <h4 style={{ lineHeight: '24px', marginBottom: '10px' }} >Create multiple sub-account</h4>
                                <p style={{ fontSize: '10px', fontWeight: '100' }} >
                                    Organise your business finances easily
                                    with multiple accounts. No limits!
                                </p>
                            </div>
                            <img src={vault} style={{ width: '32%', margin: '1%' }} />
                            <p style={{ fontSize: '10px', marginLeft: '18px' }} >© 2020 Prospa Inc</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default SignUpForm;