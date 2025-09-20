import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FAQ } from "./pages/FAQ";
import { AuthModal } from "./components/AuthModal";
import { Navigation } from "./components/Navigation";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navigation stays on all pages */}
      <Navigation
        user={user}
        onLogin={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* ✅ React Router handles page switching */}
      <div className="pt-16"> {/* padding so content isn’t hidden behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
