import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import Product from './components/product';

function App() {
  return (
    <Router>
      <div className="m-2 p-2">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
