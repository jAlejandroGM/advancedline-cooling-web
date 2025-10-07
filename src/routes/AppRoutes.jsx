import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Knowledge from "../pages/Knowledge";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/conocenos" element={<Knowledge />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}

export default AppRoutes;
