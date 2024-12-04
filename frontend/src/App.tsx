import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import UserProfile from './pages/UserProfile';
import SitterProfile from './pages/SitterProfile';
import SitterSearchPage from './pages/SitterSearchPage';
import ChatPage from './pages/ChatPage';
import UserAds from './pages/UserAds';
import '/src/styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/sitter/:id" element={<SitterProfile />} />
          <Route path="/search" element={<SitterSearchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/ads" element={<UserAds />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
