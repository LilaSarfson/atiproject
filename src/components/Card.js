import {
    Chart, Series, Legend, ValueAxis
  } from 'devextreme-react/chart';
  import GridData from './GridData.';
export default function Card (props){
    const axis = [0,50,100]
    return(
        <>
        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <GridData
            button = {props.button}
            order= {props.order}
            product= {props.product}
            name= {props.pname}
            title={props.title}
            speed={props.speed}
            required={props.required}
            produced={props.produced}
            />
        {/* PORCENTAJES */}
            <Chart
                id="chart"
                dataSource={props.data}
                rotated={true}
                palette="Soft"
                >
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
                <ValueAxis
                valueAxis={axis}
                />
                </Series>
                <Legend visible={true}
                verticalAlignment="top"
                horizontalAlignment="center"
                itemTextPosition="right" />
            </Chart>
        </div>

        </>
    )
}