import React from "react";



function Cita(props) {
  return (
    props.citas.foreach(element => {
    <div class="cita">
      <p>Mascota: <span>{element.Mascota}</span></p>
      <p>Dueño: <span>{element.Dueño}</span></p>
      <p>Fecha: <span>{element.Fecha}</span></p>
      <p>Hora: <span>{element.Hora}</span></p>
      <p>Sintomas: <span>{element.Sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>})
  );
}

export default Cita;
