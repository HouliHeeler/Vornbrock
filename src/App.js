import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/OurTeam' element={<OurTeam/>} />
        <Route path='/OurWork' element={<OurWork/>} />
        <Route path='/Careers' element={<Careers/>} />
        <Route path='/Contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;