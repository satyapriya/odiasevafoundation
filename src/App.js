import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./components/Expenses";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Activity from "./pages/Activity";
import About from "./components/About";
import OurCows from "./pages/OurCows";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-cows" element={<OurCows />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
