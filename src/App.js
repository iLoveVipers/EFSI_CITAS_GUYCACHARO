import logo from './logo.svg';
import './App.css';
import AdministraCitas from './components/AdministraCitas';
import CreacionCita from './components/CreacionCita';
import Titulo from './components/Titulo';

function App() {
  const cita1 = {Mascota:"Blacky", Dueño:"Jere", Fecha:"2023-05-08", Hora:"16:15", Sintomas:"No está comiendo"}
  const cita2 = {Mascota:"Nina", Dueño:"Martin", Fecha:"2021-08-05", Hora:"08:20", Sintomas:"Le duele la pierna"}
  const cita3 = {Mascota:"Sifon", Dueño:"Flecha", Fecha:"2023-06-10", Hora:"09:24", Sintomas:"Duerme mucho"}
  return (<div class="container"><Titulo/><div class="row"><CreacionCita/><AdministraCitas cita1={cita1} cita2={cita2} cita3={cita3}/></div></div>) 
}


export default App;
