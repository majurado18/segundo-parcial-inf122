
import './App.css';
import { useState } from 'react';
import Listametas from './componentes/Listametas';


function App() {
  const TuComponente = () => {
    const [tarea, setTarea] = useState('');
    const [lista, setLista] = useState([]);
  
    const agregarTarea = () => {
      if (tarea.trim() !== '') {
        setLista([...lista, tarea]);
        setTarea('');
      }
    };
  
    return (
      <div>
        <h1>Mis metas</h1>
        <input
          type="text"
          value={tarea}
          name="nuevames"
          onChange={(e) => setTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
  
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
      </div>
    );
  };
        
  return (
    <div className="App">
      <Listametas />
      
    </div>
  );
}

export default App;
