import React from 'react'
// import Button from '@mui/material/Button'
import { click } from '@testing-library/user-event/dist/click';

// Crearemos una componente que generara una componente aleatoria. En caso de volver a tener
// El mismo valor, no se renderizara la pagina

export default function GeneradorNombres({names}) {

    const [name, setName] = React.useState(names[0]);

    const getName = React.useCallback(() => {
        const index = Math.floor(Math.random()*(names.length));
        setName(names[index]);
    }, [names])

    const clearName = React.useCallback(() => {
      setName(null);
    },[]);

  return (
    <div>
      <h1>
        Memorizar Con useMemo y useCallback
      </h1>

    { React.useMemo(() => {
      console.log('Renderizar Nombre');
        return(
        <div>
          <h2>Nombre Generado: {name ? name : 'None' }</h2>
        </div>
        );
      },[name])
    }
    {/* <Button 
      onClick={getName}
      variant='outlined'>
        Generar Nombre
    </Button>

    <Button 
      onClick={clearName}
      variant='outlined'>
        Borrar Nombre
    </Button> */}
    
    <Button
      label={'Generar Nombre'}
      click={getName}>
    </Button>

    <Button
      label={'Clear Nombre'}
      click={clearName}>
    </Button>
    </div>
  )
}

function WrappedButton({click,label}) {
  console.log('Renderizado Boton')
  return(
    <button
    onClick={()=> click()} >
      {label}
    </button>
  )
}

const Button = React.memo(WrappedButton)
