import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export const AuthModal = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
    };
    onLogin(userData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {isLogin ? 'Welcome Back!' : 'Join LegalHelper'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Sign in to continue your legal journey' : 'Start decoding legal documents today'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="What should we call you?"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.45H18.02C17.73 15.99 16.91 17.27 15.59 18.15V20.86H19.47C21.45 19.05 22.56 16.04 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C15.24 23 17.95 21.92 19.47 20.86L15.59 18.15C14.47 18.89 13.12 19.33 12 19.33C9.31 19.33 7.02 17.64 6.14 15.29H2.18V18.09C4.01 21.09 7.72 23 12 23Z" fill="#34A853"/>
              <path d="M6.14 15.29C5.89 14.57 5.75 13.8 5.75 13C5.75 12.2 5.89 11.43 6.14 10.71V7.91H2.18C1.43 9.35 1 11.12 1 13C1 14.88 1.43 16.65 2.18 18.09L6.14 15.29Z" fill="#FBBC05"/>
              <path d="M12 6.67C13.34 6.67 14.49 7.11 15.42 7.99L18.49 4.92C16.88 3.36 14.63 2.33 12 2.33C7.72 2.33 4.01 4.91 2.18 7.91L6.14 10.71C7.02 8.36 9.31 6.67 12 6.67Z" fill="#EA4335"/>
            </svg>
            <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Continue with Google</span>
          </button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up here"
                : 'Already have an account? Sign in instead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};