import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { Link } from 'react-router-dom';

const links = [
  {
    name: "Inicio",
    href: "/main" // Cambié "Inicio" por "/main" para que coincida con tu enrutamiento
  },
  {
    name: "Estacione",
    href: "/estacione" // Cambié "Estacione" por "#" para mantenerlo como ejemplo
  },
  {
    name: "Contacto",
    href: "/contacto" // Cambié "Contacto" por "#" para mantenerlo como ejemplo
  },
  {
    name: "InicioSesion",
    href: "/login" // Cambié "InicioSesion" por "/login" para que coincida con tu enrutamiento
  },
  {
    name: "Registrar",
    href: "registrar" // Cambié "Registrar" por "#" para mantenerlo como ejemplo
  },
];

const NavBar = ({ onLoginClick }) => {
  return (
    <Navbar expand="lg" bg="light" className="mt-1">
      <Container fluid className="bg-info">
        <Navbar.Brand href="inicio.html" className="fw-bold text-white">
          <img src="../Assets/esta.png" alt="" width="50px" /> E-Parking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <Nav.Item key={index} className="me-3">
                <Link to={link.href} className="nav-link fw-bold">{link.name}</Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
