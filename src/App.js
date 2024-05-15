import './App.css';
//Allows dynamic routing in a web page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//All components used for the website
import Home from "./components/Home";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/*Navigation on to the different pages on the websites using Routes*/}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
