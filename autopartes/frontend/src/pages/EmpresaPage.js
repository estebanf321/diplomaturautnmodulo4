import React from 'react';
import '../styles/components/pages/EmpresaPage.css';

const EmpresaPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p> Una empresa familiar con más de 40 años de experiencia en el rubro automotor y una trayectoría
                    reconocida por nuestros clientes, que avala nuestra seriedad y compromiso.</p>
                <p> Nuestras empresa cuenta con un extenso <b>"catálogo de productos"</b> ( partes de motor, chapería,
                    accesorios,
                    etc. ), además tenemos un <b>"amplio stock"</b> en repuestos nacionales e importados y contamos con una
                    <b>"rápida
                        entrega"</b> según lo requiere el mercado actual, todo gracias a un grupo de personas dedicadas
                    <b>"full time"</b>
                    a la atención de sus necesidades para tratar de brindarle una solución eficiente a sus problemas .
                </p>
                <p> Estamos inscriptos en el <b>RUDAC</b> ( Registro Unico de Desarmadero y Actividades Conexas )
                    dependiente de la
                    DNRPA ( Dirección Nacional de Registro de la Propiedad Automotor ) para el desarmado de automotores
                    dados de baja y la comercialización de sus partes. También estamos habilitados por la Municipalidad de
                    Rosario y la Secretaría de Estado de Medio Ambiente y Desarrollo Sustentable de la Provincia de Santa Fe
                    .</p>
            </div>
            <div className="empresaimg">
                <img src="images/empresa/empresa.jpg" alt="Empresa" />
            </div>
            <div className="ubicacion">
                <h2>Ubicación</h2>
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.7155435340005!2d-60.721160584813994!3d-32.932112980925474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65327ce690cdd%3A0x50effbf44595cdb!2sAv.%20Eva%20Per%C3%B3n%207201%2C%20S2008BSD%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1629436003476!5m2!1ses!2sar"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                <p> Nuestra "CASA CENTRAL"se encuentra en: <b> Av. Eva Perón Nº 7201 </b>- ( Esquina México).
                </p>
            </div>
        </main>
    );
}

export default EmpresaPage;