import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainbody = () => {
  return (
    <div className="w-[98%] min-h-[85vh] flex flex-col items-center bg-slate-950 overflow-hidden pt-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>

      <section className="w-[90%] max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight text-white leading-tight">
            LEVEL UP YOUR <span className="text-cyan-400">GAMING</span> EXPERIENCE
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0">
            Welcome to X-or-O, the ultimate destination for classic strategy games reimagined for the modern web. Compete, win, and dominate.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <NavLink to="/xo">PLAY NOW</NavLink>
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-lg transition-all glass">
              <NavLink to="/game">EXPLORE GAMES</NavLink>
            </button>
          </div>
        </div>

        <div className="flex-1 relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass rounded-2xl p-4 overflow-hidden aspect-video flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 w-32 h-32 opacity-80">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-cyan-500/30 rounded flex items-center justify-center text-cyan-400 font-orbitron">
                  {i % 2 === 0 ? "X" : "O"}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-orbitron text-cyan-400">CURRENTLY TRENDING</span>
              <p className="text-xl font-bold text-white">Advanced Tic-Tac-Toe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="w-[98%] bg-slate-900/50 border-y border-slate-800 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { label: "Active Players", value: "12.5k+" },
            { label: "Total Matches", value: "1.2M+" },
            { label: "Tournaments", value: "48" },
            { label: "Avg. Rating", value: "4.9/5" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl font-bold font-orbitron text-white group-hover:text-cyan-400 transition-colors">{stat.value}</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mainbody