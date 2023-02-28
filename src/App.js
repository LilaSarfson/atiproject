import 'devextreme/dist/css/dx.light.css';
import { useEffect, useState } from 'react';
import dataPay from '../src/data/payload.json'
import { fetchData } from './api/service';
import Card from './components/Card';
function App() {
  const [data, setData] = useState('')
  useEffect(()=>{
    fetchData(setData)
  }, [])
  const machinesData = dataPay.Payload[3].workunits

  return (
    <div className="App">
      <div className='flex flex-row flex-wrap gap-4'>
      {
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

      }
      </div>
    </div>
  );
}

export default App;

        // customizeItems={customizeItems}