import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import VerifyEmail from './components/VerifyEmail';
import PostJob from './components/PostJob';
import JobsList from './components/JobsList';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs" element={<JobsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
