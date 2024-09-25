import Dashboard from "./components/pages/Dashboard";
import HeroSection from "./components/pages/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Addcards from "./components/pages/Addcards";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import UpdateCard from "./components/pages/UpdateCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HeroSection />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Signin />}
          />
          <Route
            path="/addCourse"
            element={<Addcards />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/update/:id"
            element={<UpdateCard />}
          />

        
        </Routes>
      </Router>
    </>
  );
}

export default App;
