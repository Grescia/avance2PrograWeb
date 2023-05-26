'use client';
import './style.css'

let contar = 0;
 const Lista = ({nombre, fecha, puntaje, comentario}) => {

    
    function contador(){
        contar++;
        return contar;
    }


    return(
        <div className="caja">
            <div className='numero'>
                <p>{contador()}</p>
            </div>
            <div className="descripcion">
                <p>{nombre} - {fecha} - {puntaje}</p>
                <p>"{comentario}"</p>
            </div>
        </div>
    )
 }

 export default Lista;