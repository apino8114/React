import React from 'react'

const Autos = (props) => {
  return (
    <div>
        <img src={props.imagen} style={{ width: '400px' }}/>
        <h1>{props.Marca}</h1>
        <h2>{props.Modelo}</h2>
    </div>
  )
}

export default Autos