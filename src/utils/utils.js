// Acceder a una parte concreta de los datos. Cambiando el "element" podemos acceder a los distintos workunits del Payload, filtrando según el valor del "sbname".

export function getData (data, element){
    const filterData = (data.Payload).filter(obj => obj.sbaname === element)
    const elementsData = filterData[0].workunits
    return elementsData

  }