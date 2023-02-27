import 'devextreme/dist/css/dx.light.css';
import dataPay from '../src/data/Payload.json'
import Card from './components/Card';
function App() {
  const Payload = dataPay.Payload[3];
  const machines = Payload.workunits
  console.log(Payload)
  return (
    <div className="App">
      <div className='flex flex-row flex-wrap gap-4'>
      {
        machines.map((mach) =>{return(<Card
        value1="tprod"
        value2="tpar"
        value3="tprep"
        title={mach.wkuname}
        data={machines}
        speed={mach.speed}
        button = {mach.sitname}
        order={mach.wohnumber}
        product={mach.matcode}
        pname={mach.matname}
        />)}) 

      }
      </div>
    </div>
  );
}

export default App;

        // customizeItems={customizeItems}