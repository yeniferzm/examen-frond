import React from 'react'
import ReactDOM from 'react-dom/client'
import AnimalForm from './AnimalForm';
import AnimalCard from './AnimalCard';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimalCard/>
    <AnimalForm/>
    

  </React.StrictMode>,
)
