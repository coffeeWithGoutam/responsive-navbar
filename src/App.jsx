// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AppIdeas from './pages/AppIdeas';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/appIdeas" element={<AppIdeas/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
