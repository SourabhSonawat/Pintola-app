import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import About from "./pages/About";
import Pintola from "./pages/Pintola";
import TrackOrder from "./pages/TrackOrder";
import Recipes from "./pages/Recipes";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return isHomePage ? (
    <div className="header_1">
      <p>
        <span>
          <HiOutlineShoppingBag />
        </span>
        Use FIRST15 & Get FLAT 15% OFF on Your First Order!
      </p>
    </div>
  ) : null;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pintola" element={<Pintola />} />
            <Route path="/trackOrder" element={<TrackOrder />} />
            <Route path="/recipes" element={<Recipes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
