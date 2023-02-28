export function fetchData (setData){
    const URL= "http://intranet.taionline.net:14036/api/loadtfunction"
    fetch(URL, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: {
            "FuncName": "Tai.Backend.Qplant",
            "ActiveActor": "WKU11",
            "FuncParam01": "OEEMONITOR2",
            "FuncParam02": "SPAIN",
            "FuncParam03": "",
            "FuncParam04": "",
            "FuncParam05": "",
            "TraceLog": "Y"
        
            }
    }).then(response => {
        setData(response) 
    })
    .catch(error =>{
        console.log(error)
    })
}