import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import GaleryNasa from './components/GaleryNasa';
import AsteroidNasa from './components/AsteriodNasa';
import Favorite from './components/Favorite';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/galery" element={<GaleryNasa />} />
          <Route path="/asteriod" element={<AsteroidNasa />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
