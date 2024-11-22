import { useState } from 'react'
import React from 'react'
import HomePage from './components/home/home'
import LoginPage from './components/login/login'

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
