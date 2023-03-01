import {
    Chart, Series, Legend, ValueAxis, CommonSeriesSettings
  } from 'devextreme-react/chart';
export default function ChartComponent (props){
    return(
        <div className='w-2/3 h-2/3 fix'>
         <Chart
                id="chart"
                dataSource={props.data}
                rotated={true}
                palette="Soft"
                >
                 <CommonSeriesSettings
                argumentField={props.name}
                type="bar"
                ignoreEmptyPoints={true}
        />    
                <Series
                type="bar"
                valueField={props.value1}
                argumentField="serie"
                color="#f3c40b"
                >
                </Series>
                <Series
                type="bar"
                valueField={props.value2}
                argumentField="serie"
                color="#f3c40b"
                >
                </Series>
                <Series
                type="bar"
                valueField={props.value3}
                argumentField="serie"
                color="#f3c40b"
                >
                </Series>
                <Legend visible={true}
                verticalAlignment="top"
                horizontalAlignment="center"
                itemTextPosition="right" />
            </Chart>
        </div>
    )
}

  {/* <ValueAxis
                valueAxis={axis}
                /> */}