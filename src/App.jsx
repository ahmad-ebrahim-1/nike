import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Home from "./sections/Home";
import CheckoutProduct from "./sections/CheckoutProduct";

function App() {
  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/nike/" element={<Home />} />
        <Route path="/nike/product-checkout" element={<CheckoutProduct />} />
      </Routes>
    </>
  );
}

export default App;
