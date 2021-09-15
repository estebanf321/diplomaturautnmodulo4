import React from 'react';
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="images/servicios/icon_atencion.png" alt="servicio0" />
                <div className="info">
                    <h4>Centro de atención telefónica y por chat</h4>
                    <p>
                        <ul>
                            <li>Líneas rotativas y números directos de wsp.</li>
                            <li>Personal de atención capacitado.</li>
                            <li>Rapidez, eficacia, servicio y respuestas en el acto.</li>
                            <li>Asesoramiento a conciencia y beneficio del cliente.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/icon_cobertura.png" alt="servicio1" />
                <div className="info">
                    <h4>Cobertura nacional e internacional</h4>
                    <p>
                        <ul>
                            <li>Equipo de viajantes por zonas.</li>
                            <li>Asesoramiento personalizado a clientes de todo el país.</li>
                            <li>Información constante de ofertas y novedades.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/icon_ventas.png" alt="servicio2" />
                <div className="info">
                    <h4>Envíos a todo el país</h4>
                    <p>
                        <ul>
                            <li>Gran diferencial en logística.</li>
                            <li>Pedidos despachados en el día a todo el país.</li>
                            <li>Personal especializado.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;