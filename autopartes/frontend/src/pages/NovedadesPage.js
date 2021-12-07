
import { useState, useEffect } from 'react';
import axios from 'axios';
import OfertaItem from '../components/novedades/NovedadItem';

import '../styles/components/pages/NovedadesPage.css';

const Nav = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades')
                ;
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <section className="holder">
            <h1>Listado de Ofertas</h1>
            <div class="demo">
                <ul>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <OfertaItem
                            id_oferta={item.id_oferta} descrip_prod={item.descrip_prod}
                            precio_oferta={item.precio_oferta} cant_min={item.cant_min} imagen={item.imagen} />)

                    )}


                </ul>
            </div>

        </section>
    );
}

export default Nav;