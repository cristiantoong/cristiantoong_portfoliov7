import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

//Pages
import Home from "./pages";
import ContactPage from "./pages/ContactPage";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes> */}
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
