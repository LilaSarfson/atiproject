import 'devextreme/dist/css/dx.light.css';
import { useEffect, useState } from 'react';
import dataPay from './data/payload.json'
import { fetchData } from './api/service';
import {
  Chart, Series, CommonSeriesSettings, Legend, Export,
} from 'devextreme-react/chart';
// import Card from './components/Card';
// import ChartComponent from './components/Chart';
function App() {
  const [data, setData] = useState('')
  useEffect(()=>{
    fetchData(setData)
   
  }, [])
  const machinesData = dataPay.Payload[3].workunits
  console.log(machinesData[1])
  function filteredData (index){
    let resultado = machinesData.filter(e => e.wkucode === index.toString())
    return resultado
  }
 let result = machinesData.filter(e => e.wkucode === '1')
  
  return (
    <div className="App">
     <div className='flex flex-row flex-wrap gap-4'>
      {
     machinesData.map((obj, index)=>{return(
      <Chart
      rotated={true}
      id="chart"
      palette="Soft"
      title="Percent of Total Energy Production"
      dataSource={filteredData(index+1)}
    >
      <CommonSeriesSettings
        argumentField="wkuname"
        type="bar"
        ignoreEmptyPoints={false}
      />
      <Series valueField="tprod" name="Oil Production" />
      <Series valueField="tpar" name="Gas Production" />
      <Series valueField="tprep" name="Coal Production" />
      {/* <Legend verticalAlignment="bottom" horizontalAlignment="center" />
      <Export enabled={true} /> */}
    </Chart>
     )})
    }




     {/* {machinesData.map((mach, index) => {return ( <ChartComponent
        data={machinesData}
        key={index}
        value1='tprod'
        // value2="tpar"
        // value3="tprep"
        />)})
      } */}
      {/* {
        machinesData.map((mach, index) =>{return(<Card
        key={index}
        value1="tprod"
        value2="tpar"
        value3="tprep"
        title={mach.wkuname}
        data={machinesData}
        speed={mach.speed}
        button = {mach.sitname}
        order={mach.wohnumber}
        product={mach.matcode}
        pname={mach.matname}
        required={mach.quantityrequired}
        produced={mach.quantityproduced}
        />)}) 

      // } */}
      </div>
    </div>
  );
}

export default App;