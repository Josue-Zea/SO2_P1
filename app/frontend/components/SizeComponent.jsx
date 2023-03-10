import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const SizeGrapic = ({ dataSize }) => {
    return (
        <div className='SizeGraph'>
            <Pie
                className='SizeGraph'
                data={{
                    labels: ['Espacio libre', 'Espacio ocupado'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: dataSize,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 5,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: "black",
                                font: {
                                    size: 18
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
};