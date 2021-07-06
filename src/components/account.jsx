import { split } from 'lodash';
import React from 'react';
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = { balance: 0, decimal: 0 };
    }
    componentDidMount() {
        this.setState({ balance: this.props.balance, decimal: this.props.decimal });
    }

    render() {

        return (
            <div style={{
                background: '#FFFFFF', width: this.props.width, height: '130px',
                margin: this.props.margin, padding: this.props.padding,
                float: 'left', borderRadius: '4px',
                boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
                alignItems: 'end'
            }} >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: '50px'
                }} >
                    <div style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <p style={{ fontSize: '12px' }} >{this.props.accountType}</p>
                        <p style={{ fontSize: '11px', color: '#8397AB' }} >{this.props.bankAccount}</p>
                    </div>
                    <img style={{ width: '44px' }} src={this.props.icon} ></img>
                </div>
                <div style={{}}>
                    <span style={{ fontSize: '30px' }} >
                        <CountUp
                            start={0}
                            end={this.state.balance}
                            duration={1.5}
                            separator=","
                            decimal="."
                            prefix="N"
                            suffix="."
                        />
                        <CountUp
                            style={{ fontSize: '16px' }}
                            start={0}
                            end={this.state.decimal}
                            duration={4}
                        />
                    </span>
                </div>
            </div>
        );
    }
}

// function Account(props) {

//     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
//     const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

//     return (
//         <div>
//             {isBigScreen &&
//                 <div style={{
//                     background: '#FFFFFF', height: '130px', width: '428px',
//                     margin: '10px 15px', padding: '20px',
//                     float: 'left', borderRadius: '4px',
//                     boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
//                 }} >
//                     <p style={{ fontSize: '12px', marginBottom: '15px' }} >{props.accountType}</p>
//                     <p style={{ fontSize: '11px', color: '#8397AB', marginBottom: '20px' }} >{props.bankAccount}</p>
//                     <div style={{ position: 'absolute', bottom: '25px' }}>
//                         <span style={{ fontSize: '30px' }} >{props.balance}</span><span>.45</span>
//                     </div>
//                     <img style={{ position: 'absolute', top: '30px', marginLeft: '380px', width: '44px' }} src={props.icon} ></img>
//                 </div>
//             }
//             {isTabletOrMobile &&
//                 <div style={{
//                     background: '#FFFFFF', height: '130px', width: '75%',
//                     margin: '10px 7.5%', padding: '5%',
//                     float: 'left', borderRadius: '4px',
//                     boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
//                 }} >
//                     <p style={{ fontSize: '12px', marginBottom: '15px' }} >{props.accountType}</p>
//                     <p style={{ fontSize: '11px', color: '#8397AB', marginBottom: '20px' }} >{props.bankAccount}</p>
//                     <div style={{ position: 'relative', bottom: '-31px' }}>
//                         <span style={{ fontSize: '30px' }} >{props.balance}</span><span>.45</span>
//                     </div>
//                     <img style={{ position: 'relative', top: '-100px', left: '83%', width: '44px' }} src={props.icon} ></img>
//                 </div>
//             }
//         </div>
//     );
// }

export default Account;