export default function Textbox (props){
    return(
        <div className="flex flex-col justify-center text-center">
        <p>{props.title}</p>
        <div className="font-bold text-center px-8 border-solid border-gray border-2 rounded-md self-center">
        <p className="text-xs">{props.text}</p>
        </div>
        </div>
    )
}