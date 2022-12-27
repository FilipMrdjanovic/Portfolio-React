import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import AboutPage from './about/AboutPage';

export default function Page() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}
