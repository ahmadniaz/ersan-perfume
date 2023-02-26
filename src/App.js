import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collection from "./pages/Collection/Collection";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

import ProductState from "./context/products-context/ProductState";

function App() {
  return (
    <Router>
      <ProductState>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/description" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </ProductState>
    </Router>
  );
}

export default App;
