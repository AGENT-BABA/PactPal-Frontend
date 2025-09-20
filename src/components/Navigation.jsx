import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, User, LogOut, Menu, X } from "lucide-react";

export const Navigation = ({ user, onLogin, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              LegalHelper
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              to="/faq"
              className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
            >
              FAQ
            </Link>
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl">
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Hey, {user.name}!</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
              >
                Home
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
              >
                FAQ
              </Link>
            </div>

            {/* Mobile User Section */}
            <div className="mt-4 pt-4 border-t border-white/10">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl">
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">Hey, {user.name}!</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center space-x-2 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onLogin();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};