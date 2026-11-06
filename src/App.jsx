import Navbar from "./Components/Navbar";
import Home from "./Sections/Home"
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";
function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;