import React from 'react';
import bienvenidoIcon from '../../../assets/esta.png'
import userNameIcon from '../../../assets/username-icon.svg'
import passNameIcon from '../../../assets/password-icon.svg';
import correoIcon from '../../../assets/mail2.jpg';
import dniIcon from '../../../assets/dni.jpg';
import telIcon from '../../../assets/tel.jpg';

function Registro() {
  const registrar = () => {
    // Lógica para registrar al usuario
  };

  return (
    <div className="bg-gradient bg-info bg-opacity-50 d-flex justify-content-center align-items-center vh-100">
      <div className="bg-light p-5 rounded-5 text-secondary shadow position-absolute" style={{ maxWidth: '35rem', width: '90%' }}>
        <div className="d-flex justify-content-center">
          <img
            src={bienvenidoIcon}
            alt="login-icon"
            style={{ height: '7rem' }}
          />
        </div>
        <div className="text-center fs-1 fw-bold">Registro</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={userNameIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="nombre"
            className="form-control bg-light"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={userNameIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="apellido"
            className="form-control bg-light"
            type="text"
            placeholder="Apellido"
          />
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={dniIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="dni"
            className="form-control bg-light"
            type="text"
            placeholder="DNI"
          />
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={telIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="telefono"
            className="form-control bg-light"
            type="text"
            placeholder="Teléfono"
          />
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={correoIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="mail"
            className="form-control bg-light"
            type="email"
            placeholder="Mail"
          />
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={passNameIcon}
              alt="password-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="password"
            className="form-control bg-light"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={registrar}>
          Registrar
        </div>
      </div>
    </div>
  );
}

export default Registro;
