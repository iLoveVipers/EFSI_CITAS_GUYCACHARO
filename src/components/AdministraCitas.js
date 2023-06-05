import React from "react";
import Cita from './Cita';


function AdministraCitas(props) {


  
  return (
    <div class="one-half column">
    <h2>Administra tus citas</h2>
    {props.citas.map((cita, i) => <Cita {...cita} key={i}/>)}
      
  </div>
  );
}

export default AdministraCitas;
