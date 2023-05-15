import React from "react";



function Cita(props) {
  return (
    <div class="cita">
      <p>Mascota: <span>{props.cita.Mascota}</span></p>
      <p>Dueño: <span>{props.cita.Dueño}</span></p>
      <p>Fecha: <span>{props.cita.Fecha}</span></p>
      <p>Hora: <span>{props.cita.Hora}</span></p>
      <p>Sintomas: <span>{props.cita.Sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default Cita;
