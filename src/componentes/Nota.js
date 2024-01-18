import React, { useState } from 'react';
import '../style/Nota.css';
function Nota({ nota, onDelete, onEdit }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);
    const handleGuardar = () => {
        onEdit(nota.id, nuevoTexto);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>completar</button>
                </div>
            ) : (
                
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton' onClick={() => onDelete(nota.id)}>eliminar</button>
                </div>
               
            )}
        </div>
    );
}

export default Nota;