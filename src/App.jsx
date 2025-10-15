import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const navLinks = [
    { to: "/", labelKey: "navbar.home", end: true },
    { to: "/about", labelKey: "navbar.about" },
    { to: "/knowledge", labelKey: "navbar.knowledge" },
    { to: "/products", labelKey: "navbar.products" },
    { to: "/contact", labelKey: "navbar.contact" },
  ];

  return (
    <>
      <Topbar />
      <Navbar links={navLinks} />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
