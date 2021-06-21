import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SideIntroPanel from './side-intro-panel';
import SignUpForm from './sign-up-form';

function SignUp() {
    return (
        <div>
            <SideIntroPanel />
            <main style={{ height: '100%', background:'#FFFFFF' }} >
                <SignUpForm />
            </main>
        </div>
    );
}

export default SignUp;