import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';


function Summary(props) {

    // const [chartData, setChartData] = useState({
    const chartData = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [
            {
                // label: 'June Summary',
                data: [4.5, 8, 11, 12.5, 12.8, 8.2, 6],
                fill: false,
                borderColor: '#FA4A84',
                // backgroundColor: '#FA4A84',
                fill: { value: 4.8, above: 'rgba(250, 74, 132, 0.26)', below: 'rgb(0, 0, 255, 0.1)' },
                tension: 0.2,
                backgroundImage: 'linear-gradient(red, yellow)',
                position: 'bottom',
                borderWidth: 1,

            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                labels: { display: false }
            },
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 20,
                ticks: {
                    stepSize: 5,
                    format: { width: 20 }
                },
                grid: {
                    borderWidth: 0,
                    tickWidth: 0,
                },
            },
            x: {
                grid: {
                    display: false
                },
                offset: true,
            },
        }
    };
    // });

    return (
        <div style={{
            background: '#FFFFFF', height: '350px', width: '486px',
            margin: '10px 15px', padding: '20px',
            float: 'left', borderRadius: '4px',
            boxShadow: '5px 1px 20px rgba(112, 112, 112, 0.15)',
        }} >
            <p style={{ fontSize: '14px', marginBottom: '15px' }} >June Summary</p>
            <div style={{ float: 'left', marginRight: '50px' }} >
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Money in</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div style={{ float: 'left', marginRight: '50px' }}>
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Money out</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div style={{ float: 'left', marginRight: '50px' }}>
                <p style={{ fontSize: '11px', marginBottom: '12px' }} >Difference</p>
                <p style={{ fontSize: '11px', marginBottom: '12px', color: '#8397AB' }} >N 5,650,000</p>
            </div>
            <div className='graph-summary' style={{ marginTop: '90px' }} >
                <Line data={chartData} options={{ maintainAspectRatio: true }} options={options} />
            </div>
        </div>
    );
}

export default Summary;