import logo from './logo.svg';
import './App.css';
import AdministraCitas from './components/AdministraCitas';
import CreacionCita from './components/CreacionCita';
import Titulo from './components/Titulo';

function App() {
  const [citas, setCitas] = useState([]);
  return (<div class="container"><Titulo/><div class="row"><CreacionCita setCitas={setCitas}/><AdministraCitas citas={citas} setCitas={setCitas}/></div></div>) 
}


export default App;
