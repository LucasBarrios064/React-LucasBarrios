import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {CartContextProvider} from "./context/cartContext";
import CartView from "./componentes/CartView/CartView";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="BIENVENIDOS A ANIME-GO" />} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/carrito" element={<CartView/>}></Route>
            <Route path="*" element={<h4>Error: 404</h4>} />
            <Route path="/tusOrdenes"></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
