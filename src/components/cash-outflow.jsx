import React from 'react';
import { useMediaQuery } from 'react-responsive';
import pink from '../images/bank fees.png';
import teal from '../images/internet.png';
import purple from '../images/marketing.png';
import green from '../images/transfer.png';
import CashOutFlowEntries from './cash-outflow-entries';

function CashOutFlow(props) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

    return (
        <div>
            {isBigScreen &&
                <div style={{
                    background: '#FFFFFF', height: '350px', width: '372px',
                    margin: '10px 15px', padding: '20px',
                    float: 'left', borderRadius: '4px',
                    boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                }} >
                    <p style={{ fontSize: '14px', marginBottom: '15px' }} >Cash outflow</p>
                    <CashOutFlowEntries lineDivWidth='90%' icon={pink} amount='- N 250,000' title='Banking fees' />
                    <CashOutFlowEntries lineDivWidth='70%' icon={teal} amount='- N 250,000' title='Internet' />
                    <CashOutFlowEntries lineDivWidth='38%' icon={purple} amount='- N 250,000' title='Marketing' />
                    <CashOutFlowEntries lineDivWidth='20%' icon={green} amount='- N 250,000' title='Transfers' />

                    <div className='graph-summary' >
                    </div>
                </div>
            }
            {isTabletOrMobile &&
                <div style={{
                    background: '#FFFFFF', height: '350px', width: '97%',
                    margin: '10px 8%', padding: '6% 6% 0',
                    float: 'left', borderRadius: '4px',
                    boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                }} >
                    <p style={{ fontSize: '14px', marginBottom: '15px' }} >Cash outflow</p>
                    <CashOutFlowEntries lineDivWidth='90%' icon={pink} amount='- N 250,000' title='Banking fees' />
                    <CashOutFlowEntries lineDivWidth='70%' icon={teal} amount='- N 250,000' title='Internet' />
                    <CashOutFlowEntries lineDivWidth='38%' icon={purple} amount='- N 250,000' title='Marketing' />
                    <CashOutFlowEntries lineDivWidth='20%' icon={green} amount='- N 250,000' title='Transfers' />
                </div>
            }
        </div>
    );
}

export default CashOutFlow;