import React ,{useMemo,useCallback, useState}from 'react'

/**
 * useMemo se utiliza para funciones de creacion de componentes 
 * useMeno debe memorizar algo >>> alternatica de React.meno()
 * 
 * useCallback Se usa para funciones en linea dentro de un componente
 * useCallback Se usa para memorizar valores listados en las dependencias. Funciones en linea
*/

const MiComponente = () => {


  const [name, setName] = useState('');

  const names = ['Alejo','Ramirez']

  const getName = useCallback(
    () => {
      //obtener Nombre aleatorio
      const random = Math.floor(Math.random()*(names.length-1))
      setName(names[random])
    },
    [name],
  );

  const clearName = useCallback(
    () => {
      //Borrar Nombre
      setName('')
    },
    [],
  );

  

  return(
    <h1>
      Mi Componente
    </h1>
  )
}


// const Memorization = useMemo(() => MiComponente, [a,b])

