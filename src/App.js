import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="cart" exact>
            <Cart />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
