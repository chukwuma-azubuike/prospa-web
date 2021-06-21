import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import SideIntroPanel2 from './side-intro-panel2';
import SignInForm from './sign-in-form';

function SignUp() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' })

    return (
        <div>
            {isBigScreen &&
                <div>
                    <SideIntroPanel2 />
                    <main style={{ height: '100%', background: '#FFFFFF' }} >
                        <SignInForm />
                    </main>
                </div>
            }
            {isTabletOrMobile &&
                <div>
                    <main style={{ height: '100%', background: '#FFFFFF' }} >
                        <SignInForm />
                    </main>
                </div>
            }
        </div>
    );
}

export default SignUp;