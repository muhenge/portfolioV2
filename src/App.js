import Intro from './pages/Intro';
import {Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Aside from './pages/Aside';
function App() {
  return (
  
    <div className="container-fluid">
       <div class="row flex-nowrap">
          <Aside />
          <div class="col py-3">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
       </div>
      
    
    </div>
  );
}

export default App;
