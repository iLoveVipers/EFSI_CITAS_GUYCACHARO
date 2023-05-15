import React from "react";
import Cita from './Cita';


function AdministraCitas(props) {
  return (
    <div class="one-half column">
    <h2>Administra tus citas</h2>
    <Cita cita={props.cita1}/>
    <Cita cita={props.cita2}/>
    <Cita cita={props.cita3}/>      
  </div>
  );
}

export default AdministraCitas;
