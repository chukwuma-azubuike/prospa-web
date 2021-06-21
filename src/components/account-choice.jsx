import React from 'react';
import tick from '../images/tick.png';
import { useMediaQuery } from 'react-responsive';

function AccountChoice(props) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' })

    return (
        <div>
            {isBigScreen &&
                <div id={props.divId} style={{
                    borderRadius: '4px', marginTop: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
                    padding: '0px 20px 10px', border: props.check ? '1px solid #FA4A84' : 'none'
                }}>
                    <label>
                        <input type='radio' id={props.id} name='cac' defaultChecked={props.defaultChecked}
                            onClick={(e) => {
                                var radio = document.getElementById(props.id);
                                if (radio.checked) {
                                    props.checker(e);
                                }
                            }}
                        />
                        <div style={{
                            width: '266px', transition: 'all 0.3s',
                            display: 'inline-block', marginLeft: '30px'
                        }} >
                            <h4 style={{ marginTop: '12px', marginBottom: '3px' }} > {props.header} </h4>
                            <div style={{ display: !props.check && 'none', transition: 'all 0.3s' }} >
                                <p style={{ fontSize: '13px', marginBottom: '20px', color: '#8397AB', display: props.subHeader ? 'block' : 'none' }} >{props.subHeader}</p>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick1}</span>
                                </div>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick2} </span>
                                </div>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick3} </span>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            }
            {isTabletOrMobile &&
                <div id={props.divId} style={{
                    borderRadius: '4px', marginTop: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
                    padding: '0px 5% 10px', border: props.check ? '1px solid #FA4A84' : 'none', width:'90%'
                }}>
                    <label>
                        <input type='radio' id={props.id} name='cac' defaultChecked={props.defaultChecked}
                            onClick={(e) => {
                                var radio = document.getElementById(props.id);
                                if (radio.checked) {
                                    props.checker(e);
                                }
                            }}
                        />
                        <div style={{
                            width: '88%', transition: 'all 0.3s',
                            display: 'inline-block', marginLeft: '30px'
                        }} >
                            <h4 style={{ marginTop: '12px', marginBottom: '3px' }} > {props.header} </h4>
                            <div style={{ display: !props.check && 'none', transition: 'all 0.3s' }} >
                                <p style={{ fontSize: '13px', marginBottom: '20px', color: '#8397AB', display: props.subHeader ? 'block' : 'none' }} >{props.subHeader}</p>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick1}</span>
                                </div>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick2} </span>
                                </div>
                                <div style={{ alignItems: 'center', marginBottom: '15px', display: props.subHeader ? 'flex' : 'none' }} >
                                    <img style={{ width: '16px', marginRight: '10px' }} src={tick} /><span style={{ fontSize: '13px', color: '#8397AB' }} > {props.tick3} </span>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            }
        </div>
    )
}

export default AccountChoice;