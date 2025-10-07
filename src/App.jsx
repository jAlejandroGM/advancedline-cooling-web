import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
