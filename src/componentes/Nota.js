import React, { useState } from 'react';
import '../style/Nota.css';
function Nota({ nota, onDelete, onKeep }) {
    const [editando, setEditando] = useState(false);
    const [guardar, setGuardar] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);
    const handleGuardar1 = () => {
        onDelete(nota.id, nuevoTexto);
        setNuevoTexto(false);
    };

    const handleGuardar = () => {
        onKeep(nota.id, nuevoTexto);
        setGuardar(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>guardar</button>
                </div>
            ) : (
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton' onClick={() => onDelete(nota.id)}>eliminar</button>
                </div>
               
            )}
            {guardar ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>guardar</button>
                </div>
            ) : (
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton1' onClick={() => onKeep(nota.id)}>completo</button>
                </div>
               
            )}
        </div>
    );
}

export default Nota;