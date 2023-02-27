import 'devextreme/dist/css/dx.light.css';
import Chart, {
  ArgumentAxis,
  Series,
  Legend
} from 'devextreme-react/chart';

const data = [{
  arg: 1990,
  val: 5320816667
}, {
  arg: 2000,
  val: 6127700428
}, {
  arg: 2010,
  val: 6916183482
}];
function App() {
  return (
    <div className="App">
        <Chart dataSource={data}>
                <ArgumentAxis tickInterval={10} />
                <Series type="bar" />
                <Legend visible={false} />
            </Chart>
    </div>
  );
}

export default App;
