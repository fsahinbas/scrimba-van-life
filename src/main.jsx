import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Vans from "./pages/vans/Vans.jsx";
import Van from "./pages/van/Van.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/vans" element={<Vans />}></Route>
      <Route path="/vans/:id" element={<Van />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
