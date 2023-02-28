export default function GridData (props){
    return(
        <section className="m-auto">
            <h3 className="text-sm text-center">{props.title}</h3>
            <div className='flex flex-row justify-center gap-4'>
                <p className="shadow-lg rounded-md ">{`Speed: ${props.speed}`}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                 {props.button}</button>
            </div> 
            <hr/>
            <div className="flex flex-row justify-center">
                <p>Active work order:</p>
                <p className="shadow-md rounded-md w-min p-1">{props.order}</p>
                <p>Product</p>
                <p className="shadow-md rounded-md w-min p-1">{props.product}</p>
            </div>    
            <div className="flex flex-col w-min m-auto">
                <p>Product name:</p>
                <p className="shadow-md rounded-md ">{props.name}</p> 
            </div>
            <div className="flex flex-row justify-center">
                <p>Quantity required:</p>
                <p className="shadow-md rounded-md w-min p-1">{props.required}</p>
                <p>Quantity produced</p>
                <p className="shadow-md rounded-md w-min p-1">{props.produced}</p>
            </div>    
        </section> 
)}