import React from 'react'
import {useQuery} from 'react-query' 
import axios from 'axios'
import { Chart as ChartJS, LineElement, LinearScale, Tooltip, Legend } from 'chart.js'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'
import './chart.css'
ChartJS.register(
    LineElement,
    LinearScale,
    Legend,
    Tooltip
)
const apicall = () =>{
    return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
}

function OnePageChart() {
    const {data, isFetching, isLoading} = useQuery('one-page', apicall)
    if (isLoading){
        return <>Loading...</>
    }
    var labels = Object.keys(data?.data?.bpi)
    var prices = Object.values(data?.data?.bpi).map(obj=> parseFloat(obj.rate))
    const dataForChart = {
        labels,
        datasets : [{
          label : "Bitcoin Price",
          data : prices,
          backgroundColor : ["yellow", 'brown', 'green'],
          borderColor : 'black',
          borderWidth : '4'
        }]
      }
  return (
    <span>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Line data={dataForChart}/>
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Bar data={dataForChart}/>
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Pie data={dataForChart} />
    </div>
    <div style={{'width' : '500px', 'height' : '200px'}}>
    <Doughnut data={dataForChart}/>
    </div>
    </span>
  )
}

export default OnePageChart
