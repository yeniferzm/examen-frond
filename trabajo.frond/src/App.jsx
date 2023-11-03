import React from 'react';
import AnimalForm from './AnimalForm';
import AnimalCard from './AnimalCard';


function App() {
  return (
    <div>
      <h1>Formulario de Animales</h1>
      <AnimalForm />
      <AnimalCard name="Nombre del animal" type="Tipo del animal" />
    </div>
  );
}

export default App;