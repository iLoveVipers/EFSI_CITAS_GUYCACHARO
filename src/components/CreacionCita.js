import React from "react";

const CreacionCita = (props) => {
  
 /* const cita = {Mascota:"Blacky", Dueño:"Jere", Fecha:"2023-05-08", Hora:"16:15", Sintomas:"No está comiendo"}*/

  const crearCita = () => {
    const cita = {Mascota: document.getElementById("mascota").value, Dueño: document.getElementById("dueño").value, Fecha: document.getElementById("fecha").value, Hora: document.getElementById("hora").value, Sintomas: document.getElementById("sintomas").value}
    const nuevaCita = props.citas
    console.log(nuevaCita, cita)
    nuevaCita.push(cita)
    props.setCitas(nuevaCita)
  }
  
  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
      <div>
        
        <label>Nombre Mascota</label>
        <input type="text" id="mascota" class="u-full-width" placeholder="Nombre Mascota"
        ></input>
        <label>Nombre Dueño</label>
        <input type="text" id="dueño" class="u-full-width"
        placeholder="Nombre dueño de la mascota" ></input>
        <label>Fecha</label><input type="date" id="fecha"
        class="u-full-width" ></input>
        <label>hora</label>
        <input type="time" id="hora" class="u-full-width"
        ></input>
        <label>Sintomas</label>
        <textarea id="sintomas" class="u-full-width"></textarea>
        <button type="button"
        class="u-full-width button-primary" onClick={crearCita}>Agregar Cita</button></div>
    </div>
      );
}


      export default CreacionCita;
