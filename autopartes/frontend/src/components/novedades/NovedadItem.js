import React from 'react';

const OfertaItem = (props) => {

    const {id_oferta,descrip_prod,precio_oferta,cant_min,imagen } = props;
    return (
        <div className='novedades'>
            <h2>*{id_oferta} - {descrip_prod}</h2>
            <h3>Precio Unitario: ${precio_oferta}- Minimo:{cant_min} unidades</h3>
            <img src={imagen} alt="{descrip_prod}" />
        </div>
    );
}

export default OfertaItem;