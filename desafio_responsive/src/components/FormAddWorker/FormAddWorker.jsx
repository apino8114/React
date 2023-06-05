import React, { useState } from 'react';
import { Input } from '../Input';
import Button from 'react-bootstrap/Button';
import './FormAddWorker.css';

function FormAddWorker({onClickAddWorker}) {

  const[nombre,setNombre] = useState()
  const[correo,setCorreo] = useState()



  const handlerOnClick = () =>
  onClickAddWorker({
    nombre:nombre,
    correo:correo,
  })
  
  
  return (
    <div className="form">
      <Input 
      type="text" 
      placeholder="Nombre Trabajador" 
      className="form__input" 
      onChangeInput={(e) => setNombre(e.target.value)}
      />
      <Input 
      type="text" 
      placeholder="Correo Trabajador" 
      className="form__input"
      onChangeInput={(e) => setCorreo(e.target.value)}
      />
      <Button variant="outline-primary" onClick={handlerOnClick} >Agregar Colaborador</Button>
    </div>
  );
}

export default FormAddWorker;
