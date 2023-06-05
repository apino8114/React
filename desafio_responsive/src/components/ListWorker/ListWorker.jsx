import React from 'react';

const ListWorker = ({ lista }) => {
  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWorker;
