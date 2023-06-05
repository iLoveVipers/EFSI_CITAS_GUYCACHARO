import logo from './logo.svg';
import './App.css';
import AdministraCitas from './components/AdministraCitas';
import CreacionCita from './components/CreacionCita';
import Titulo from './components/Titulo';
import React, { useEffect, useState } from "react";

function App() {
  const [citas, setCitas] = useState([]);
  console.log(citas)
  return (<div class="container">
    <Titulo/><div class="row">
      <CreacionCita setCitas={setCitas}/>
      <AdministraCitas citas={citas} setCitas={setCitas}/>
      </div>
      </div>) 
}


export default App;
