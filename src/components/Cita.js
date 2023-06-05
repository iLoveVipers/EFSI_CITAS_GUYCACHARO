import React, { useState } from "react";



function Cita(props) {
  const [eliminado, setEliminado] = useState(false)
  return !eliminado && <div class="cita">
      <p>Mascota: <span>{props.Mascota}</span></p>
      <p>Dueño: <span>{props.Dueño}</span></p>
      <p>Fecha: <span>{props.Fecha}</span></p>
      <p>Hora: <span>{props.Hora}</span></p>
      <p>Sintomas: <span>{props.Sintomas}</span></p><button class="button elimnar u-full-width" onClick={()=> setEliminado(true)}>Eliminar ×</button>
    </div>
}

export default Cita;
