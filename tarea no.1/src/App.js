import logo from './logo.svg';
import './App.css';


function App() {
  const libros = [
    'Libro: Cómo ser un estoico, Autor: Massimo Pigliucci',
    'Libro: El arte de vivir como un estoico, Autor: David Fideler',
    'Libro: Piensa como un emperador romano, Autor: Donald Robertson',
    'Libro: Meditaciones, Autor: Marco Aurelio',
    'Libro: El arte de la buena vida, Autor: William B. Irvine',
    'Libro: Claves para una maternidad estoica, Autor: Lorena García Díez',
    'Libro: Cómo ser un estoico, Autor: Massimo Pigliucci',
    'Libro: El arte de vivir como un estoico, Autor: David Fideler',
    'Libro: Piensa como un emperador romano, Autor: Donald Robertson',
    'Libro: Meditaciones, Autor: Marco Aurelio'
  ];

  const listaLibros = libros.map(person => <li>{person}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Listado de Libros </h1>
        <br></br>
        
        <ul>{listaLibros}</ul>
      </header>
    </div>
  );
}

export default App;
