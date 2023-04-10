import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const App = () => {
  const location = useLocation().pathname;

  return (
    <div className="App">
      {!location.includes("/auth") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
