import Intro from './pages/Intro';
import {Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Aside from './pages/Aside';
import Project from './pages/Project';
import Contact from './pages/Contact';
function App() {
  return (
  
    <div className="container-fluid">
       <div class="row flex-nowrap">
          <Aside />
          <div class="col py-3 animate__animated animate__fadeInRight">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
       </div>
      
    
    </div>
  );
}

export default App;
