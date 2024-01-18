import React, { useState } from 'react';
import Nota from './Nota';
import '../style/Listametas.css';

function Listametas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };

    return (
        <div className='contenedor-principal'>
            <h1>Mis metas</h1>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                name='Add city'
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar</button>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={editarNota}
                />
            ))}
            
        </div>
    );
}

export default Listametas;