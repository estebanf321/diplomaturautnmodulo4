import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">

            <div className="columna left">
                <h2>Contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" name="telefono"/>
                    </p>

                    <p>
                        <label for="comentario">Consulta</label>
                        <textarea name="" id="comentario" cols="30" rows="10"></textarea>
                    </p>
                    <p className="acciones"> <input type="submit" value="Enviar" /></p>
                </form>
            </div>

            <div className="columna right">
                <h2>Otras vías de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros ....</p>
                <ul>
                    <li>Teléfono: 341-4564762 / 341-4571443</li>
                    <li>Wsp: 3413507313</li>
                    <li>Email: ventas@desarmaderoar.com.ar</li>
                    <li>Facebook: autopartesrosario</li>
                    <li>Instagram: @autopartesrosario</li>
                </ul>

            </div>
        </main>
    );
}

export default ContactoPage;