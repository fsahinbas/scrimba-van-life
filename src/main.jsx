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
import HostVans from "./pages/host/hostVans/HostVans.jsx";
import HostLayout from "./pages/host/HostLayout.jsx";
import HostVanInfo from "./pages/host/hostVan/hostVanInfo/HostVanInfo.jsx";
import HostVanDetails from "./pages/host/hostVan/hostVanDetails/HostVanDetails.jsx";
import HostVanPricing from "./pages/host/hostVan/hostVanPricing/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/hostVan/hostVanPhotos/HostVanPhotos.jsx";

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
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans/:id" element={<HostVanDetails />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
