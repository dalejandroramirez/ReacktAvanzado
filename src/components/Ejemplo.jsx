import React , {useState, memo}from 'react'

export default function Ejemplo() {
 
  const names = ['Alejo','Ramirez']
  
  const [name, setName] = useState('');

  const getName = () => {
    const random = Math.floor(Math.random()*(names.length-1))
    return names[random];
  }

  const clearName = () => {
    setName('');
  }

  const obtainName = () => {
    setName(getName())
  } 

  return (
    <div>
      <h1>Ejemplo de uso react memo</h1>
      {/* <NameComponent name ={name} clearName={clearName}></NameComponent> */}
      <NombresAleatorios name={name} clearName={clearName} ></NombresAleatorios>
      <button onClick={obtainName}>
        Generar Nombre
      </button>
    </div>
  )
}

export const NameComponent = (props) => {
  console.log('Renderizado de Nuevo');
  return(
    <div>
      <h2>
        {props.name}
      </h2>
      <button onClick = {()=> props.clearName}>
        Borrar Nombre
      </button>
    </div>
    )
}

function nameAreEquial(prevProps, nextProps) {
  // Es un booleano que me dice si es necesario o no renderizar
  return prevProps.name !== nextProps.name
}


export const NombresAleatorios = memo(NameComponent,nameAreEquial)
