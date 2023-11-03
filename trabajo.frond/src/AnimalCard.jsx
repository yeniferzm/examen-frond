import React from 'react';

function AnimalCard(props) {
  return (
    <div className="card">
      <h2>Información del animal</h2>
      <p><strong>Nombre:</strong> {props.name}</p>
      <p><strong>Tipo:</strong> {props.type}</p>
    </div>
  );
}

export default AnimalCard;
