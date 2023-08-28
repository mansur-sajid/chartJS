import React from 'react'
import { Chart as ChartJS, LineElement, LinearScale, Tooltip, Legend } from 'chart.js'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'
import './chart.css'
ChartJS.register(
    LineElement,
    LinearScale,
    Legend,
    Tooltip
)
function chart({data}) {
    console.log(2)
  return (
    <>
    <span id='page'>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Line data={data} options={{
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 0,
              to: 0.3,
              loop: true
            }}
    }}/>
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Bar data={data}/>
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Pie data={data} />
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Doughnut data={data}/>
    </div>
    </span>
    </>
  )
}

export default chart
