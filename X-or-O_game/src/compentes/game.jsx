import React from 'react'
import { NavLink } from 'react-router-dom'

const Game = () => {
  const games = [
    { id: 'xo', title: 'X or O', status: 'LIVE NOW', icon: '⚔️' },
    { id: 'chess', title: 'Cyber Chess', status: 'COMING SOON', icon: '♟️' },
    { id: 'cards', title: 'Neon Solitaire', status: 'BETA', icon: '🃏' },
  ];

  return (
    <div className='w-full min-h-[85vh] bg-slate-950 p-8 pt-16 flex flex-col items-center gap-12 font-orbitron'>
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-white tracking-widest">ARCADE <span className="text-cyan-400">VAULT</span></h2>
        <p className="text-slate-500 text-sm tracking-[0.3em]">SELECT YOUR CHALLENGE</p>
      </div>

      <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {games.map((game) => (
          <div key={game.id} className='group relative glass border border-slate-800 rounded-2xl p-6 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden'>
            {/* Hover Background Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${game.status === 'LIVE NOW' ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10' :
                  game.status === 'BETA' ? 'border-purple-500 text-purple-400 bg-purple-500/10' :
                    'border-slate-700 text-slate-500'
                  }`}>
                  {game.status}
                </span>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-white mb-2'>{game.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Compete against AI or challenge friends in this reimagined classic. Perfect your strategy and climb the leaderboard.
                </p>
              </div>

              <NavLink
                to={game.id === 'xo' ? '/xo' : '#'}
                className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${game.status === 'LIVE NOW'
                  ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
              >
                {game.status === 'LIVE NOW' ? 'START MATCH' : 'NOTIFY ME'}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Game