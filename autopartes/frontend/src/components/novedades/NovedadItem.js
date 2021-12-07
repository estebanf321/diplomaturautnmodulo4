import React from 'react';

const OfertaItem = (props) => {

    const {id_oferta,descrip_prod,precio_oferta,cant_min,imagen } = props;
    return (
        <li className='novedad'>
            <img src={imagen} alt="{descrip_prod}" />
            <h2>*{id_oferta} - {descrip_prod}</h2>
            <p>Precio Unitario: ${precio_oferta}- Minimo:{cant_min} unidades</p>
            
        </li>
    );
}

export default OfertaItem;