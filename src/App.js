import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContaner from './componentes/ItemListContainer/ItemListContaner';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContaner greeting= "BIENVENIDOS A ANIME-GO" />
    </div>
  );
}

export default App;
