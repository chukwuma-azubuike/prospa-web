import React from 'react';
import SideIntroPanel2 from './side-intro-panel2';
import SignUpForm from './sign-in-form';

function SignUp() {
    return (
        <div>
            <SideIntroPanel2 />
            <main style={{ height: '100%', background: '#FFFFFF' }} >
                <SignUpForm />
            </main>
        </div>
    );
}

export default SignUp;