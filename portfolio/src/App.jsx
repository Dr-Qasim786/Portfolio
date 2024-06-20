import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Publications from "./components/Publications/Publications";
import Workshops from "./components/Workshops/Workshops";
import Conferences from "./components/Conferences/Conferences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Scrollup from "./components/Scrollup/Scrollup";
import ResearchSupervision from "./components/Research Supervision/ResearchSupervision";
import Qualification from "./components/Qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Publications />
        <Conferences />
        <Workshops />
        {/* <ResearchSupervision /> */}
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
