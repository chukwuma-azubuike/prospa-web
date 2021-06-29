import React from 'react';

class CashOutFlowEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lineDivWidth: '0' };
    }
    componentDidMount() {
        this.setState({ lineDivWidth: this.props.lineDivWidth })
    }

    render() {

        return (
            <div>
                <div style={{ marginRight: '50px', padding: '20px 0', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }} >
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <span> <img style={{ width: '35px' }} src={this.props.icon} /> </span>
                        <span style={{ fontSize: '12px', margin: 'auto 18px', color: '#8397AB' }} >{this.props.title}</span>
                    </div>
                    <div style={{ width: '50%' }} >
                        <p> {this.props.amount} </p>
                        <div style={{
                            width: '100%', height: '6px', background: '#EEEFF7',
                            borderRadius: '4px', top: '3px', position: 'relative'
                        }} >
                            <div style={{
                                width: this.state.lineDivWidth, height: '6px', background: '#FFCF56', borderRadius: '4px', transition: '2s all'
                            }} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CashOutFlowEntries;