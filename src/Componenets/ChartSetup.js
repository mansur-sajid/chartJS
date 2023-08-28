import Chart from './chart'
import axios from 'axios'
import { useQuery } from 'react-query'



let apiCall = ()=>{
  return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
}

function Linechart() {
  const {data, isFetched} = useQuery('fetch', apiCall, {
    refetchOnWindowFocus: false
  })
  if (isFetched){
  var labels = Object.keys(data?.data?.bpi)
  var prices = Object.values(data?.data?.bpi).map(obj=> parseFloat(obj.rate))
  }
  console.log(1)
  return (
    <>
    <Chart data={{
    labels,
    datasets : [{
      label : "Bitcoin Price",
      data : prices,
      backgroundColor : ["yellow", 'brown', 'green'],
      borderColor : 'black',
      borderWidth : '4'
    }]
  }}/>
    </>
  )
}

export default Linechart
