import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import './Input.css';

export const Input = ({ onChangeInput, placeholder, className }) => {
  return (
    <Form.Control
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={(e) => onChangeInput(e)}
    />
  );
};
