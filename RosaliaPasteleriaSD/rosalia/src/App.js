import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './watermark.css';
import Cheesecake from './cheesecake';
import HomePage from './HomePage';
import Bizcochos from './bizcochos';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/cheesecake" element={<Cheesecake />} />
		  <Route path="/bizcochos" element={<Bizcochos />} />
          <Route path="/" element={<HomePage />} />
		  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
