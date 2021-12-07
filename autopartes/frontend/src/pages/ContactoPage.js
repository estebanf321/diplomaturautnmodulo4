import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setformData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setformData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setformData(initialForm)
        }
    }

    return (
        <main className="holder">

            <div className="columna left">
                <h2>Contacto</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" name="telefono"  value={formData.telefono} onChange={handleChange} />
                    </p>

                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"> <input type="submit" value="Enviar" /></p>
                    
                    {sending ? <p>Enviando...</p> :null}
                    {msg ? <p>{msg}</p> :null}

                </form>
            </div>

            <div className="columna right">
                <h2>Otras vías de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros ....</p>
                <ul>
                <li> <i class="fas fa-phone-alt"></i> Teléfono: 341-4564762 / 341-4571443</li>
                <li> <i class="fab fa-whatsapp"></i> WhatsApp: +3413507313</li>
                <li> <i class="fas fa-at"></i> E-mail: <a target="_blanck" href="mailto:ventas@desarmaderoar.com.ar?subject=CONTACTO"> ventas@desarmaderoar.com.ar</a></li>
                <li> <i class="fab fa-facebook-square"></i> Facebook:<a target="_blanck" href="https://www.facebook.com/autoparterosario"> autoparterosario</a></li>
                <li> <i class="fab fa-instagram"></i> Instagram:<a target="_blanck" href="https://www.instagram.com/autopartesrosario/?hl=es"> @autopartesrosario </a></li>
            </ul>

            </div>
        </main>
    );
}

export default ContactoPage;