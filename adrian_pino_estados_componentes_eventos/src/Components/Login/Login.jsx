import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login({ onSubmitForm }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const correoVal = 'a@a.cl';
  const passwordVal = '123';

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (correo === correoVal && password === passwordVal) {
      onSubmitForm(true);
    } else {
      onSubmitForm(false);
    }
  };

  const handlerInputs = (e) => {
    setPassword(e.target.value);
    console.log(correo.length, password.length);

    if (e.target.value !== '' && correo !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  console.log(correo);

  return (
    <Form onSubmit={handlerOnSubmit}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" id="email" autoComplete="off" onChange={(e) => setCorreo(e.target.value)} />
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" id="Password" autoComplete="off" onChange={(e) => handlerInputs(e)} />
      <Button type="submit" variant="outline-dark" disabled={isDisabled}>
        Send
      </Button>
    </Form>
  );
}

export default Login;
