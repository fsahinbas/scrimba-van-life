import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import Van from "./pages/Van.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/vans" element={<Vans />}></Route>
      <Route path="/vans/:id" element={<Van />}></Route>
    </Routes>
  </BrowserRouter>
);
