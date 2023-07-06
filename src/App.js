import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Support from './pages/Support';
import History from './pages/History';
import Result from './pages/Result';
import Login from './pages/Login';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/history" element={<History />} />
            <Route path="/result" element={<Result />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
