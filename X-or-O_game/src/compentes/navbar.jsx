import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 w-[98%] glass border-b border-slate-800 px-6 py-4 flex items-center justify-between font-orbitron'>
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <span className="text-slate-950 font-bold text-xl">P</span>
        </div>
        <NavLink to="/" className="text-2xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Play<span className="text-cyan-400">Sphere</span>
        </NavLink>
      </div>

      <div className='hidden md:block'>
        <ul className='flex items-center gap-8'>
          {['Home', 'Game', 'About'].map((item) => (
            <li key={item}>
              <NavLink
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  relative text-sm font-bold tracking-widest transition-all hover:text-cyan-400
                  ${isActive ? 'bg-cyan-400' : 'text-white'}
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full
                `}
              >
                {item.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-4 py-2 text-xs font-bold border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
          LOG IN
        </button>
        <button className="px-4 py-2 text-xs font-bold bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]">
          GET PRO
        </button>
      </div>
    </nav>
  )
}

export default Navbar