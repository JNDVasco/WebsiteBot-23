import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages';
import RegistrationPage from './pages/registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
