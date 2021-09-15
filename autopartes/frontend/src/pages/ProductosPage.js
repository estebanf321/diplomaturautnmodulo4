import React from 'react';

const ProductosPage = (props) => {
    return (
        <main className="holder">

            <div className="portadaimg">
                <h2>Productos</h2>
                <img src="images/productos/portada.png" alt="Portada" />

            </div>

            <h2># Galería #</h2>

            <div className="galeria">

                <div className="foto">
                    <img src="images/productos/producto000001.jpg" alt="img000001" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000002.jpg" alt="img000002" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000003.jpg" alt="img000003" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000004.jpg" alt="img000004" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000005.jpg" alt="img000005" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000006.jpg" alt="img000006" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000007.jpg" alt="img000007" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000008.jpg" alt="img000008" />
                </div>
                <div className="foto">
                    <img src="images/productos/producto000009.jpg" alt="img000009" />
                </div>

            </div>
        </main>
    );
}

export default ProductosPage;