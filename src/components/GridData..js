import Textbox from "./Textbox"
export default function GridData (props){
    return(
        <section className="m-0 flex flex-col gap-2">
            <h5 className="text-sm text-center">{props.title}</h5>
            <div className='flex flex-row justify-center gap-4'>
            <Textbox
            text={`Speed: ${props.speed}`}
            />                
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg">
                 {props.button}</button>
            </div> 
            <hr/>
            <div className="flex flex-row justify-around">
                <Textbox
            title="Active work order:"    
            text={props.order}
                />
                <Textbox
            title="Product:"    
            text={props.product}
            />   
            </div>    
            <div className="m-auto">
                <Textbox
            title="Product name:"    
            text={props.name}
                /> 
            </div>
            <div className="flex flex-row justify-around">
                <Textbox
            title="Quantity required:"    
            text={props.required}
                />
                <Textbox
            title="Quantity produced:"    
            text={props.produced}
                />
            </div>    
        </section> 
)}