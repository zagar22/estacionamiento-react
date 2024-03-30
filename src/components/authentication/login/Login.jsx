import React from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Login.css';
import 'bootstrap';
import userNameIcon from '../../../assets/username-icon.svg';
import passNameIcon from '../../../assets/password-icon.svg';
import visitanteIcon from '../../../assets/visitante.jpg';
import bienvenidoIcon from '../../../assets/esta.png';

function Login() {
  const history = useHistory(); // Aquí se llama al hook useHistory

  const login = (e) => {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'viviana' && password === '1234') {
      Swal.fire({
        icon: 'success',
        title: '¡Login exitoso!',
        showConfirmButton: false,
        timer: 1000
      });

      setTimeout(function () {
        history.push('/inicio'); // Redirige a la página de inicio
      }, 2500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Inténtalo de nuevo',
        confirmButtonColor: '#c30b4e',
      });
    }
  };

  const visitante = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Redirigiendo a Visitante...',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = 'estacionamiento.html';
    });
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
        <div className="text-center fs-1 fw-bold">Bienvenido</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img
              src={userNameIcon}
              alt="username-icon"
              style={{ height: '1rem' }}
            />
          </div>
          <input
            id="username"
            className="form-control bg-light"
            type="text"
            placeholder="Usuario"
          />
        </div>
        <div className="icono input-group mt-1">
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
        <div className="d-flex justify-content-around mt-1">
          <div className="d-flex align-items-center gap-1">
            <input className="form-check-input" type="checkbox" />
            <div className="pt-1" style={{ fontSize: '0.9rem' }}>Recordarme</div>
          </div>
          <div className="pt-1">
            <a
              href="www.google.com"
              className="text-decoration-none text-info fw-semibold fst-italic"
              style={{ fontSize: '0.9rem' }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={login}>
          Login
        </div>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>¿No tenes una Cuenta?</div>
          <Link to="/registro" className="text-decoration-none text-info fw-semibold">
            Registrate
          </Link>
        </div>
        <div className="p-3">
          <div className="border-bottom text-center" style={{ height: '0.9rem' }}>
            <span className="bg-white px-3">o</span>
          </div>
        </div>
        <div
          id="visitante"
          className="btn btn-custom d-flex gap-2 justify-content-center border mt-3 shadow-sm"
          style={{ cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s', backgroundColor: '#f8f9fa' }}
          onMouseOver={(e) => { e.target.style.backgroundColor = '#d3d9df'; e.target.style.color = '#000'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = '#f8f9fa'; e.target.style.color = ''; }}
          onClick={visitante}
        >
          <img
            src={visitanteIcon}
            alt="google-icon"
            style={{ height: '1.6rem' }}
          />
          <div className="btn-info fw-semibold text-secondary">Visitante</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
