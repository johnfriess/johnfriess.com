import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/projects";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  document.title = "John Friess"

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
  });
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
