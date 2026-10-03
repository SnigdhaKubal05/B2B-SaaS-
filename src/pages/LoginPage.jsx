import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle,
  Share2,
  Sparkles
} from 'lucide-react';

/**
 * LoginPage Component (Module 1 — Social Multiposting Platform)
 * 
 * Clean, centered, distraction-free Login UI keeping the exact dark obsidian
 * and hot-pink aesthetic.
 * 
 * Implements:
 * 1. Username input (controlled component with useState)
 * 2. Password input (controlled component with useState & visibility toggle)
 * 3. Form submit event handling with e.preventDefault()
 * 4. Client-side navigation to /dashboard with react-router-dom
 */
export default function LoginPage({ onLoginSuccess }) {
  // State for form inputs (Controlled Components)
  const [username, setUsername] = useState('creator_alex');
  const [password, setPassword] = useState('password123');

  // State for UI interactions
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Hook for programmatic client-side navigation
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // 1. Prevent default full page reload
    e.preventDefault();

    // 2. Form validation
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please enter both your username and password.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    // 3. Simulate brief authentication transition
    setTimeout(() => {
      setIsLoading(false);

      if (onLoginSuccess) {
        onLoginSuccess({ username: username.trim() });
      }

      // 4. Navigate to dashboard (Module 2 destination)
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#09070f] text-zinc-100 flex flex-col justify-between items-center p-4 sm:p-6 relative overflow-hidden select-none">
      
      {/* Background ambient radial gradients matching theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] ambient-glow pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff1a8c]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#7928ca]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Centered Login Section */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 py-10">
        <div className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(255,46,147,0.25)] border border-pink-500/25">
          
          {/* Brand & Heading */}
          <div className="text-center mb-7">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/30 mb-3.5">
              <Share2 className="w-7 h-7" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Multipost Studio
            </h1>
            <p className="text-xs text-zinc-400 mt-1.5">
              Sign in to manage and broadcast your content
            </p>
          </div>

          {/* Demo Mode Notice */}
          <div className="mb-5 p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Demo Mode:</span> Pre-filled with demo credentials. Click <strong>"Sign In to Studio"</strong> to continue to the dashboard.
            </div>
          </div>

          {/* Validation Error Alert */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username Input Field */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                />
              </div>
            </div>

            {/* Password Input Field with Visibility Toggle */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Frontend mock mode: Enter any password to log in!");
                  }}
                  className="text-xs text-pink-400 hover:text-pink-300 underline underline-offset-2"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-11 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-pink-400" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center pt-1">
              <input
                id="remember"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-pink-500 focus:ring-pink-400 accent-pink-500 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 block text-xs text-zinc-400 cursor-pointer select-none">
                Remember this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-3 py-3.5 rounded-full hot-pink-btn text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In to Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Target Platforms Footer Pill */}
          <div className="mt-7 pt-5 border-t border-white/10 text-center">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Cross-post instantly to
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-zinc-300">
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5">Meta (FB + IG)</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5">𝕏 Twitter</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5">LinkedIn</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5">YouTube</span>
            </div>
          </div>

        </div>
      </div>

      {/* Clean Minimal Footer */}
      <footer className="w-full py-4 text-center text-xs text-zinc-500 relative z-10">
        Multiposting Platform &copy; 2026 • Module 1: Login UI
      </footer>

    </div>
  );
}
