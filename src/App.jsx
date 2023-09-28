import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import CheckoutProduct from "./sections/CheckoutProduct";

function App() {
  return (
    <Routes>
      <Route path="/nike/" element={<Home />} />
      <Route path="/nike/product-checkout" element={<CheckoutProduct />} />
    </Routes>
  );
}

export default App;
