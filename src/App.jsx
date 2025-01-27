import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/nike/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
