import 'devextreme/dist/css/dx.light.css';
import { useEffect, useState } from 'react';
import { fetchData } from './api/service';
import {getData} from '../src/utils/utils'
import dataPayload from './data/payload.json'
import Card from './components/Card';
function App() {

  // Si la llamada a la API fuera real
  const [data, setData] = useState('')
  useEffect(()=>{
    fetchData(setData)
  }, [])

  //Declaro una variable con la data específica que estoy buscando a través de la función getData (utils)
  const dataMachines = getData(dataPayload, "Impresion")

  //Filtro el array de dataMachines para acceder a cada uno de los elementos según su índice y que así, el componente CHART me pinte cada uno de ellos, ya que su propiedad "DataSource" sólo admite un array de objetos o un JSON.
  function FilterChartData (indexObj){
    let resultado = dataMachines.filter((e, index )=> index === indexObj)
    return resultado
  }
  return (
    <div id="App" className="App flex flex-col justify-center gap-8">
      <h1 className='text-center'>ATIsmartfactory</h1>
     <div className='flex flex-wrap gap-6 justify-center w-full'>
      {
        //Uso la función map para pintar el componente Card tantas veces como elementos haya en el array de dataMachines.
        dataMachines.map((mach, index) =>{return(<Card
        key={index}
        value1="tprod"
        value2="tpar"
        value3="tprep"
        title={mach.wkuname}
        data={FilterChartData(index)}
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
