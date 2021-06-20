import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function SignUpForm() {
    return (
        <div style={{ margin: '150px auto', width: '376px' }}>
            <p style={{ fontSize: '10px', position: 'absolute', right: '96px', top: '37px' }} >Don't have an account?
                <Link to='/signup' href='' style={{ textDecoration: 'none', color: '#FA4A84' }} >  Sign Up</Link></p>
            <form className='sign-up-form' >
                <h1>Welcome back to Prospa</h1>
                <p style={{ color: '#8397AB', fontSize: '14px', fontWeight: '100', marginBottom: '20px' }} >An account, with powerful, personalised tools
                    all in one place</p>
                <input type='email' name='email' class='EM' />
                <span class="floating-label-EM EM">Email</span>
                <input type='password' name='lName' class='PW' />
                <span class="floating-label-PW">Password</span>
                <Link to='/dashboard' style={{ width: 'inherit' }} >
                    <button type='submit'
                        onClick={(e) => {
                        }} >Next
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default SignUpForm;