import React from "react";

const CreacionCita = (props) => {
  
 /* const cita1 = {Mascota:"Blacky", Dueño:"Jere", Fecha:"2023-05-08", Hora:"16:15", Sintomas:"No está comiendo"}*/

  const crearCita = () => {
    const cita = {Mascota: document.getElementsByName(mascota).value, Dueño: document.getElementsByName(dueño).value, Fecha: document.getElementsByName(fecha).value, Hora: document.getElementsByName(hora).value, Sintomas: document.getElementsByName(sintomas).value}
    const nuevaCita = props.citas
    nuevaCita.push(cita)
    props.setCitas(nuevaCita)
  }
  
  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
      <div>
        
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"
        value=""></input>
        <label>Nombre Dueño</label>
        <input type="text" name="dueño" class="u-full-width"
        placeholder="Nombre dueño de la mascota" value=""></input>
        <label>Fecha</label><input type="date" name="fecha"
        class="u-full-width" value=""></input>
        <label>hora</label>
        <input type="time" name="hora" class="u-full-width"
        value=""></input>
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="button"
        class="u-full-width button-primary" onclick={crearCita}>Agregar Cita</button></div>
    </div>
      );
}


      export default CreacionCita;
