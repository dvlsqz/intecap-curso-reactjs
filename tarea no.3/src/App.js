import logo from './logo.svg';
import './App.css';
import { PruebasCompoenente } from './Components/PruebasComponente';
import Temporizador from './Components/Temporizador';
import ListaPokemon from './Components/ListaPokemon';
import ListaPublicaciones from './Components/ListaPublicaciones';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasCompoenente></PruebasCompoenente>
        <Temporizador tiempoInicial={100}></Temporizador>
        <ListaPokemon></ListaPokemon>
        <hr/>
        <ListaPublicaciones></ListaPublicaciones>
      </header>
    </div>
  );
}

export default App;
