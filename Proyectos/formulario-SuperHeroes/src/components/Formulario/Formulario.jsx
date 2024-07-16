import React, { useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState();
    const [confirContra, setConfirContra] = useState();
    const [nombreError, setNombreError] = useState();
    const [apellidoError, setApeError] = useState();
    const [correoError, setCorreoError] = useState();
    const [contraseñaError, setContraseñaError] = useState("");
    const [confirContraError, setConfirContraError] = useState("");

    const manejarCambioNombre = (e) => {
        const value = e.target.value;
        setNombre(value);
        if (value.trim().length === 0) {
            setNombreError('El nombre es requerido');
        } else if (value.trim().length < 4) {
            setNombreError('El nombre debe tener al menos 4 caracteres')
        } else {
            setNombreError('');
        }
    };


    const manejarCambioApe = (e) => {
        const value = e.target.value;
        setApellido(value);
        if (value.trim().length === 0) {
            setApeError('El apellido es requerido')
        } else if (value.trim().length < 4) {
            setApeError('El apellido debe tener al menos 4 caracteres');
        } else {
            setApeError('')
        }
    };

    const manejoCambioCorreo = (e) => {
        const value = e.target.value;
        setCorreo(value);
        if (value.trim().length === 0) {
            setCorreoError('El correo electrónico es requerido');
        } else if (value.trim().length < 10) {
            setCorreoError('El correo eletrónico es muy corto. Debe incluir @ con la terminacion del superhéreo.')
        } else {
            setCorreoError('');
        }
    };

    const manejarCambioContraseña = (e) => {
        const value = e.target.value;
        setContraseña(value);
        if (value.trim().length < 12) {
            setContraseñaError('La contraseña debe tener al menos 12 caracteres ultra secretos');
        } else {
            setContraseñaError('');
        }
    };

    const manejarCambioConfirContra = (e) => {
        const value = e.target.value;
        setConfirContra(value);
        if (value !== contraseña) {
            setConfirContraError('Las contraseñas no coinciden');
        } else {
            setConfirContraError('');
        }
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!nombreError && !apellidoError && !correoError && !contraseñaError && !confirContraError) {
            console.log('Formulario enviado correctamente');
        } else {
            console.log('Por favor, corrija los errores en el formulario');
        }
    };

  return (
    <div>
        <form onSubmit={manejarEnvio} className={styles.formulario}>
            <label>Nombre:</label>
            <input 
                type="text" 
                className="form-control"
                value={nombre}
                onChange={manejarCambioNombre}/>
            <hr />
            {nombreError && <p style={{ color: 'red' }}>{nombreError}</p>}
            <label>Apellido:</label>
            <input 
                type='text' 
                className="form-control"
                value={apellido}
                onChange={manejarCambioApe}/>
            <hr />
            {apellidoError && <p style={{ color: 'red' }}>{apellidoError}</p>}
            <label>Correo Electrónico:</label>
            <input 
                type="email" 
                className="form-control"
                value={correo}
                onChange={manejoCambioCorreo}/>
            <hr />
            {correoError && <p style={{ color: 'red' }}>{correoError}</p>}
            <label>Contraseña:</label>
            <input 
                type="password" 
                className="form-control"
                value={contraseña}
                onChange={manejarCambioContraseña}/>
            <hr />
            {contraseñaError && <p style={{ color: 'red' }}>{contraseñaError}</p>}
            <label>Confirmar Contraseña:</label>
            <input 
                type="password" 
                className="form-control"
                value={confirContra}
                onChange={manejarCambioConfirContra}/>
                <hr />
                {confirContraError && <p style={{ color: 'red' }}>{confirContraError}</p>}
            <button 
                type="submit" 
                className='btn btn-primary w-50 mt-3'
                >
            Crear Superhéroe</button>
        </form>
    </div>
  )
}

export default Formulario;