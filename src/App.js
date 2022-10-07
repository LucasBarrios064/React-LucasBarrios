import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="BIENVENIDOS A ANIME-GO" />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
