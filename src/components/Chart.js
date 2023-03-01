import {
    Chart, Series, Legend, CommonSeriesSettings,Label,
  } from 'devextreme-react/chart';
export default function ChartComponent (props){
    return(
    <div>
    <Chart
        rotated={true}
        id="chart"
        palette="Soft"
        dataSource={props.data}
        >
        <CommonSeriesSettings
            argumentField="serie"
            barWidth="17"
            type="bar"
            ignoreEmptyPoints={false}
            /> 
        <Series valueField={props.value1} name="Producido" >
            <Label
            visible={true}
            customizeText={props.value1}
                />
        </Series>
        <Series valueField={props.value2} name="Preparado" >
            <Label
            visible={true}
            customizeText={props.value2}
            />
        </Series>
        <Series valueField={props.value3} name="Paros" >
            <Label
            visible={true}
            customizeText={props.value3}
            />
        </Series>
        <Legend verticalAlignment="top" horizontalAlignment="center" itemTextPosition="right"/>
    </Chart>
    </div>
    )
}
