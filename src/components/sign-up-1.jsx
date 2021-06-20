import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SideIntroPanel from './side-intro-panel';
import AccountChoice from './account-choice';
import arrowLeft from '../images/arrow left.png';

function SignUp1() {

    const [check1, setChecked1] = useState(true);
    const [check2, setChecked2] = useState(false);
    const [check3, setChecked3] = useState(false);

    function checker(e) {

        if (e.target.id === 'option1') {
            setChecked1(true);
            setChecked2(false);
            setChecked3(false);
        }

        if (e.target.id === 'option2') {
            setChecked2(true);
            setChecked1(false);
            setChecked3(false);
        }

        if (e.target.id === 'option3') {
            setChecked3(true);
            setChecked2(false);
            setChecked1(false);
        }
    }

    return (
        <div>
            <SideIntroPanel />
            <main style={{ height: '100%', background: '#FFFFFF' }}>
                <div style={{ margin: '110px auto', width: '376px' }}>
                    <Link to='/signup' ><img src={arrowLeft} style={{ position: 'absolute', width: '32px', left: '96px', top: '32px' }} /></Link>
                    <p style={{ fontSize: '10px', position: 'absolute', right: '96px', top: '37px' }} >Already a member?
                        <Link to='/signin' href='' style={{ textDecoration: 'none', color: '#FA4A84' }}>  Sign In </Link> </p>
                    <form className='sign-up-form' >
                        <h2 style={{ margin: '0' }} >Open a new business account</h2>
                        <p style={{
                            marginBottom: '30px',
                            color: '#8397AB', fontSize: '14px', fontWeight: '100'
                        }} >A short description comes here</p>
                        <AccountChoice divId='div1' id='option1' checker={checker} check={check1} header='I have a registered business / charity with CAC'
                            subHeader='As a registered business you’ll get:' tick1='Account in your business name' tick2='Send to and receive transfers from all
                                Nigerian banks' tick3='Tools for business management' defaultChecked={true} />
                        <AccountChoice divId='div2' id='option2' checker={checker} check={check2} header='My business is not yet registered, I would like to register'
                            subHeader='Everything you need to start your business' tick1='Registered business name with the CAC' tick2='Tax identification number'
                            tick3='Your account will be automatically opened on completion' />
                        <AccountChoice divId='div3' id='option3' checker={checker} check={check3} header='I’m a freelancer I do business in my personal name' />
                        <Link to='/dashboard' style={{ width: 'inherit' }} >
                            <button type='submit'
                                onClick={(e) => {
                                }} >Next
                            </button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default SignUp1;