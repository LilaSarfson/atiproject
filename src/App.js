import 'devextreme/dist/css/dx.light.css';
import { useEffect, useState } from 'react';
import dataPay from './data/payload.json'
import { fetchData } from './api/service';
import Card from './components/Card';
function App() {

  // Si la llamada a la API fuera real
  const [data, setData] = useState('')
  useEffect(()=>{
    fetchData(setData)
  }, [])

  // Accedo a la parte del payload relativa a los datos de las máquinas
  const dataMachines = dataPay.Payload[3].workunits

  // Filtro los datos de esta manera, ya que el componente CHART solo admite un array de objetos como "DataSource"
  function filteredData (index){
    let resultado = dataMachines.filter(e => e.wkucode === index.toString())
    return resultado
  }
  return (
    <div id="App" className="App flex flex-col justify-center gap-8">
      <h1 className='text-center'>ATIsmartfactory</h1>
     <div className='flex flex-row flex-wrap gap-4 w-full justify-center m-0'>
      {
        dataMachines.map((mach, index) =>{return(<Card
        key={index}
        value1="tprod"
        value2="tpar"
        value3="tprep"
        title={mach.wkuname}
        data={filteredData(index+1)}
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
