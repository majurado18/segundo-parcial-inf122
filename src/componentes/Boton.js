import React from "react";
import '../style/Boton.css';

function Boton( texto, esBotonClick, funcionClick){
    return(
        <div>
            <button className={esBotonClick ? "boton-click" : "Start"}
                onClick={funcionClick}>
                {texto}
            </button>
        </div>

    );
}

export default Boton;
        