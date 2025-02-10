import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import Breakfast from './components/food/Breakfast';
import Lunch from './components/food/Lunch';

import Dinner from './components/food/Dinner';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blog from './components/navbar/Blog';
import { ContactUs } from './components/navbar/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} /> 
        <Route path="/blog" element={<Blog />} /> 
       
        <Route path="/us" element={<ContactUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;
