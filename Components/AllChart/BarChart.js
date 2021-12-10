import React from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart(props) {
    return (
        <div className='chart-container'>

            <Bar 
            
            redraw={true}

            data={{
                      labels:  ['Jan/Fev', 'Mar/Avr', 'Mai/Ju', 'Jui/Aout', 'Sep/Oct', 'Nov/Dec'],
                      datasets: [
                          {
                              label: props.name, //: 'Chiffres bimestriels',
                              data: props.data, // fullData['2020'].chart1,
                              backgroundColor:['red', 'skyblue', 'yellow', 'green', 'purple', 'orange'],
                              borderColor:['black','black','black','black','black', 'black']
                          }
                      ]
                  }}
                  
            options = {{
                      scales: {
                        yAxes: [{
                          ticks: {
                            beginAtZero: true,
                            min: 0,  max: 20
                          }    
                        }]
                      },
                      // remove box
                      legend: {
                        labels: {
                          boxWidth: 0,
                        }
                      },
                    }}
            
          
            />
            
        </div>
    )
}

export default BarChart
