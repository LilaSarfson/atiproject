import ChartComponent from './Chart';
  import GridData from './GridData.';
export default function Card (props){
    return(
  
        <div className="min-w-10p flex flex-col justify-around bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8
        drop-shadow-xl">
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
            <ChartComponent
            data={props.data}
            value1={props.value1}
            value2={props.value2}
            value3={props.value3}
            /> 
        </div>


    )
}

//Componente Cards engloba todo los demás componentes, actuando únicamente como contenedo y receptor de datos.