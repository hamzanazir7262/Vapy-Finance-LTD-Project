import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import LeadForm from './components/LeadForm';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons'; // Import ContactButtons

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apply-loan" element={<LeadForm />} />
      </Routes>
      <ContactButtons /> {/* Include ContactButtons */}
      <Footer />
    </Router>
  );
}

export default App;
