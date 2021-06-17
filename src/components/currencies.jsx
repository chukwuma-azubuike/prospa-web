import React from 'react';

function Currency(props) {
    return (
        <div style={{
            zIndex: '-2',
            background: '#FFFFFF',
            width: '100%',
            border: props.border,
            borderBottom: props.borderline,
        }} >
            <h5
                style={{ margin: '11px 6px 6px', }}
            >{props.currency}</h5>
        </div>
    )
}

export default Currency;