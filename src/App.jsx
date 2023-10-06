import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Home from "./sections/Home";
import CheckoutProduct from "./sections/CheckoutProduct";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/nike/" element={<Home />} />
        <Route path="/nike/product-checkout" element={<CheckoutProduct />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
}

export default App;
