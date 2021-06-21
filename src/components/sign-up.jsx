import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import SideIntroPanel from './side-intro-panel';
import SignUpForm from './sign-up-form';

function SignUp() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' })

    return (
        <div>
            {isBigScreen && <div>
                <SideIntroPanel />
                <main style={{ height: '100%', background: '#FFFFFF' }} >
                    <SignUpForm />
                </main>
            </div>}
            {isTabletOrMobile && <div>
                <SignUpForm />
            </div>}
        </div>
    );
}

export default SignUp;