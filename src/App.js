import React from 'react';
import './App.css';

import './Saludo';
import Saludo from './Saludo';

import Form from './components/Form';

const App = () => {
  var nombre = 'Dayana Lopez';
  return (
  <div className="App">
    <div className="App-content">
      <Saludo></Saludo>
      <p>
        {HolaMundo(nombre, 23)}
      </p>
      <p>
        Aqui haremos nuestro TO-DO list
      </p>
      <Form/> 
    </div>
  </div>
  );
}
export default App;

function HolaMundo(nombre, edad){
  var presentacion = <div>
    <h2>Mi nombre es {nombre}</h2>
    <h2>Mi edad actual es {edad}</h2>
    <h2>Soy estudiante de ingeniería en ciencias de la computación</h2>
  </div>

  return presentacion;
}