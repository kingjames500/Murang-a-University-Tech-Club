import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero/Hero";
// import Testimony from "./components/Testimony/Testimony";
// import AboutUs from "./components/About/About-us";
// import Leadership from "./page/Leadership/Leadership";
import "./App.css";
import Leadership from "./page/Leadership/Leadership";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<Leadership />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
