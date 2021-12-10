import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Services from "./components/services/Services"
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import './style/style.css'
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>

      <Navbar />

      <Home />

      <About />

      <Services />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>

  );
}

export default App;
