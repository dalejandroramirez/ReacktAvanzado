import React ,{useState,useRef, useEffect} from 'react'
//useBoolean Hook

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

const updateValue = useRef(
  {
    toggle : () => {setValue(oldValue => !oldValue)},
    on: () => setValue(true),
    off: () => setValue(false) 
  }
)

  return [value, updateValue.current]
}

export default function EjemplouseBoolean() {

  // // const [mostrar, setMostrar] = useState(false); // Sin usar useBoolean
  
  // mostrarTexto = () => {
  //   setMostrar(!mostrar)
  // }
  const [lista, setLista] = useState([]);

  // Uso de useBoolean
  const [cargando, setCargando] = useBoolean(false);
  const [error,setError] = useBoolean(false);

  //Al iniciar el componente, cargamos la lista
  useEffect(() => {
    setCargando.on()
    fetch('https://reqres.in/users')
      .then((response) => response.json())
      .then(setLista)
      .catch((error) => {
        alert('Ha ocurrido un error')
        setError.on()
      })
      .finally(() => setCargando.off())
    },[lista, setCargando, setError]);
  
  
  return (
    <div>
      <p>
        {cargando ? 'Cargando...': null}
        {error ? 'Ha ocurrido un erro' : null}
      </p>
    </div>
  )
}
