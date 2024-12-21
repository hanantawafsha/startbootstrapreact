import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar.jsx';
import Masthead from './component/masthead/Masthead.jsx';
import Portfolio from './component/portfolio/Portfolio.jsx';
import About from './component/about/About.jsx';
import Contact from './component/contact/Contact.jsx';
import Footer from './component/footer/Footer.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Masthead />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
        {/* Not found page */}
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}
