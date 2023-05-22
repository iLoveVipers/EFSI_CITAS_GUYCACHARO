import React from "react";
import Cita from './Cita';


function AdministraCitas(props) {


  
  return (
    <div class="one-half column">
    <h2>Administra tus citas</h2>
    {props.citas.forEach(element => {
      <Cita element={props.citas}/>//???
    })}
      
  </div>
  );
}

export default AdministraCitas;
