import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../../../assets/logoFinal.png';
import servicio from '../../../assets/servicios.png';
import autoEstacionado from '../../../assets/autoes estacioneados.jpg';
import estacionamiento8 from '../../../assets/estacionamiento8.jpeg';
import estacionamiento7 from '../../../assets/estacionamiento7.jpg';
import estacionamiento9 from '../../../assets/estacionamiento9.jpg';
import estacionamiento5 from '../../../assets/estacionamiento5.jpg';
import estacionamiento6 from '../../../assets/estacionamiento6.jpg';
import esta12 from '../../../assets/esta12.jpeg';
import esta11 from '../../../assets/esta11.jpg';
import './main.css';

function Main() {
    return (
      <div>
        <div className="container text-center text-white mt-3 mb-3 fw-bold">
          <div className="row">
            <div className="col-md-6 mx-auto bg-info text-white fw-bold">
              <h1 className="custom-h1">Bienvenido a E-Parking PointPark</h1>
            </div>
          </div>
        </div>
        
        <div className="background-container">
          <div className="background-image"></div>
          {/* Logotipo superpuesto */}
          <img src={logo} alt="Logo" className="logo-overlay" />
        </div>
  
        {/* Imagen de servicios*/}
        <div className="text-center text-white d-inline-block">
          <div className="text-center w-auto mx-auto">    
            <img src={servicio} alt="Logo" style={{ maxWidth: '100%' }} />
          </div>
        </div>
  
        <div className="container mt-3">
          <div className="row custom-grid">
            {/* Fila 1 */}
            <div className="col-md-4 mb-4">
              <img src={autoEstacionado} alt="Imagen 1" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={estacionamiento8} alt="Imagen 2" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={estacionamiento7} alt="Imagen 3" />
            </div>
        
            {/* Fila 2 */}
            <div className="col-md-4 mb-4">
              <img src={estacionamiento9} alt="Imagen 4" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={estacionamiento5} alt="Imagen 5" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={estacionamiento6} alt="Imagen 6" />
            </div>
          </div>
        </div>
  
        <div className="container text-center text-white mt-1 mb-0 fw-bold bg-info ">
          <h1>Nuestra Historia</h1>
        </div> 
  
        {/* Cards */}
        <div className="container mt-4">
          <div className="fondo row">
            {/* Card 1 */}
            <div className="col-md-6 mb-4 mt-4">
              <div className="card">
                <img src={esta12} className="card-img-top" alt="Imagen 1" />
                <div className="card-body">
                  <h5 className="card-title">PointPark </h5>
                  <p className="card-text">Dedicados a ser un mejor Estacionamiento, Point Park es sinónimo de calidad, conocido por sus instalaciones, seguras, limpias y bien administradas. Satisface la necesidad de soluciones de estacionamiento de calidad en ubicaciones estratégicas.</p>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="col-md-6 mb-4 mt-4">
              <div className="card">
                <img src={esta11} className="card-img-top" alt="Imagen 2" />
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.sit sit amet consectetur adipisicing elit   amet consectetur adipisicing elit  sit amet consectetur adipisicing elit Voluptates eum, cumque mollitia sapiente eligendi et ea repudiandae ratione facilis repellendus qui recusandae ab, sed at quas impedit temporibus. Eius, amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;