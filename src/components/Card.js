import {
    Chart, Series, Legend, ValueAxis
  } from 'devextreme-react/chart';
  import { TextArea } from 'devextreme-react/text-area';
  import { Button } from 'devextreme-react/button';
export default function Card (props){
    const axis = [0,50,100]
    return(
        <>
        <div class="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1>{props.title}</h1>
            <div className='flex flex-row justify-center gap-4'>
            <TextArea 
                value={`Speed: ${props.speed}`}
            />
            <Button  text={props.button} />
            </div> 
            <hr/>
        <div>
            <p>Active work order:</p>
            <p>Product</p>
            <p>{props.order}</p>
            <p>{props.product}</p>
            <p>Product name:</p>
            <p>{props.pname}</p>
        </div>    

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