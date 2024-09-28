import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import Leadership from "./page/Leadership/Leadership";
import TracksPage from "./page/TracksPage/TracksPage";
import Events from "./components/Events/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/club-events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
