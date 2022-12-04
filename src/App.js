
import './App.css';

import GeneradorNombres from './components/GeneradorNombres';


function App() {

  const names = ['alejo','lalo','landa'];
  
  return (
    <GeneradorNombres names={names}/>
  );
  
}

export default App;
