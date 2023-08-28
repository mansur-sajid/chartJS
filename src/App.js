
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartSetup from './Componenets/ChartSetup';
import 'chart.js/auto';
import  {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClientProvider, QueryClient} from 'react-query'
import OnePageChart from './Componenets/OnePageChart';

ChartJS.register(ArcElement, Tooltip, Legend);


const queryClient = new QueryClient()
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ChartSetup/>
      <h1 className='text-center'>Charts Setup in one page</h1>
      <OnePageChart/>
      <ReactQueryDevtools position = {'bottom-right'}/>
    </QueryClientProvider>
    </>
  );
}

export default App;
