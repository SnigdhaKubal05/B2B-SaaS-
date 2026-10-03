import React from 'react';
import { Sparkles, Share2 } from 'lucide-react';

export default function Navbar({ onOpenLogin, isLoggedIn, user, onLogout }) {
  return (
    <header className="w-full fixed top-0 left-0 z-50 px-6 sm:px-12 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - CATTA */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform">
            {/* Cute Cat SVG Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C9.5 4 4 6 4 11C4 16 7.5 20 12 20C16.5 20 20 16 20 11C20 6 14.5 4 12 4ZM6.5 6.8L8.8 9.5C8.3 9.8 8 10.2 8 10.8C8 11.5 8.5 12 9.2 12C9.8 12 10.2 11.7 10.5 11.2L12 12.8L13.5 11.2C13.8 11.7 14.2 12 14.8 12C15.5 12 16 11.5 16 10.8C16 10.2 15.7 9.8 15.2 9.5L17.5 6.8C18.5 8 19 9.5 19 11C19 15.4 15.9 19 12 19C8.1 19 5 15.4 5 11C5 9.5 5.5 8 6.5 6.8Z"/>
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-wider text-white font-display uppercase">
              CATTA
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 uppercase tracking-wider">
              Multipost
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#channels" className="hover:text-white transition-colors duration-200">
            Channels
          </a>
          <a href="#features" className="hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#schedule" className="hover:text-white transition-colors duration-200">
            Scheduling
          </a>
          <a href="#workflow" className="hover:text-white transition-colors duration-200">
            Workflow
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 hidden sm:inline">
                Logged in as <strong className="text-pink-400">@{user?.username}</strong>
              </span>
              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-full glass-pill text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-5 py-2 rounded-full hot-pink-btn text-xs font-semibold text-white tracking-wide cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
