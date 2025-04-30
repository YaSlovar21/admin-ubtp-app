import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from '../Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
