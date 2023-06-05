import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Input } from '../Input';

function NavBar({ onChangeNavBar, lista }) {
  const handleSearch = (e) => {
    const search = (e.target.value);
    const resultadoBusqueda = lista.filter(
      (u) =>
        u.nombre.includes(search) ||
        u.id.toString().includes(search) ||
        u.Correo.includes(search)
    );  
    onChangeNavBar (resultadoBusqueda);
   
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Input placeholder="Buscador" onChangeInput={(e)=> handleSearch(e)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
