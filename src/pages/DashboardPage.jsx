import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Share2, 
  Calendar, 
  Flame, 
  Layers, 
  ArrowRight
} from 'lucide-react';

/**
 * DashboardPage (Placeholder for Step 1 verification)
 * 
 * Styled with our signature obsidian-dark and radiant hot-pink theme.
 * Shows the logged-in user state and sets the stage for Module 2: Dashboard Layout + Sidebar.
 */
export default function DashboardPage({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#09070f] text-zinc-100 p-4 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] ambient-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7928ca]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-2xl w-full glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_0_50px_rgba(255,46,147,0.18)] relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold font-display text-white">
                  Catta Multipost Console
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  SESSION ACTIVE
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Logged in as <span className="text-pink-400 font-medium">@{user?.username || 'creator_alex'}</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full glass-pill text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Quick Multipost Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">Target Channels</span>
              <Layers className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-lg font-bold text-white font-display">4 Platforms</div>
            <div className="text-[11px] text-pink-400/80 mt-1">Meta, X, LinkedIn, YT</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">Scheduled Posts</span>
              <Calendar className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-lg font-bold text-white font-display">0 Queued</div>
            <div className="text-[11px] text-zinc-400 mt-1">Ready for Module 5 & 6</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">Activity Streak</span>
              <Flame className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-lg font-bold text-white font-display">12 Days Active</div>
            <div className="text-[11px] text-emerald-400 mt-1">Ready for Module 3</div>
          </div>
        </div>

        {/* Multipost Channel Badges */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
          <div className="text-xs font-medium text-zinc-300 mb-2.5 flex items-center justify-between">
            <span>Configured Social Multipost Channels:</span>
            <span className="text-[11px] text-pink-400">Frontend Mock Mode</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
              <div className="text-xs font-medium text-pink-300">Meta</div>
              <div className="text-[10px] text-zinc-400 mt-0.5">IG + FB</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
              <div className="text-xs font-medium text-zinc-200">𝕏 Twitter</div>
              <div className="text-[10px] text-zinc-400 mt-0.5">Feed Posts</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
              <div className="text-xs font-medium text-blue-300">LinkedIn</div>
              <div className="text-[10px] text-zinc-400 mt-0.5">Professional</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
              <div className="text-xs font-medium text-rose-300">YouTube</div>
              <div className="text-[10px] text-zinc-400 mt-0.5">Shorts & Video</div>
            </div>
          </div>
        </div>

        {/* Module 1 Milestones Card */}
        <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Module 1 Verification Complete</span>
          </div>
          <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
            <li>Controlled form inputs for Username & Password (<code className="text-pink-400">useState</code>)</li>
            <li>Interactive password visibility toggle</li>
            <li>Form submit handling (<code className="text-pink-400">e.preventDefault()</code>)</li>
            <li>Client-side route navigation to <code className="text-pink-400">/dashboard</code></li>
            <li>Obsidian-dark and hot-pink color theme preserved 100%</li>
          </ul>
        </div>

        {/* Return Button */}
        <button
          onClick={() => navigate('/')}
          className="w-full py-3.5 px-4 rounded-full hot-pink-btn text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Login Screen</span>
        </button>

      </div>
    </div>
  );
}
