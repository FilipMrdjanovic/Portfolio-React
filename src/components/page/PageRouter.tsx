import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import WorkPage from './work/WorkPage';

export default function PageRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </Router>
    </div>
  );
}
