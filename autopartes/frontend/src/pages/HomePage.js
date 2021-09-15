import React from 'react';

const HomePage = (props) =>{
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="images/home/marcas.jpg" alt="Marcas" />
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Autopartes Rosario responde con seriedad y compromiso a las exigencias del sector autopartista, que
                    se
                    encuentran en constante evolución.</p>
                <p>Nuestra tienda está especializada en la comercialización de toda la línea de repuestos de vehículos
                    Chevrolet, Citroen, Fiat, Ford, Peugeot, Renault, Toyota, Volkswagen, y muchas marcas más. </p>

            </div>
            <div className="testimonios right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Perez - TallerJP.com</span>
                </div>

            </div>
        </div>
    </main>
    );
}

export default HomePage;