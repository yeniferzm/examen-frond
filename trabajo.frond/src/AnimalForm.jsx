import React, { useState } from 'react';
import "./styles.css";

function AnimalForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.name.trim() === '' || formData.type.trim() === '') {
      setError('Por favor, completa todos los campos.');
     
      return;
    }

    
    setError('');

    
    console.log('Datos enviados:', formData);

    setFormData({
      name: '',
      type: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre del la mascota:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="type">Tipo de raza:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default AnimalForm;
