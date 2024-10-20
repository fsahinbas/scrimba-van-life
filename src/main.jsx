import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Vans from "./pages/vans/Vans.jsx";
import Van from "./pages/van/Van.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/host/dashboard/Dashboard.jsx";
import Income from "./pages/host/income/Income.jsx";
import Reviews from "./pages/host/reviews/Reviews.jsx";
import HostLayout from "./pages/host/HostLayout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<Van />} />
        </Route> */}
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Van />} />

        {/* There is no any shared UI, so nested routers are not needed here. But if we try to create nested routes, it should be like above*/}

        <Route path="/host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
