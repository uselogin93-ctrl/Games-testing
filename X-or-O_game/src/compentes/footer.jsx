import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-12 px-6 font-orbitron">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h4 className="text-xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Play<span className="text-cyan-400">Sphere</span>
          </h4>
          <p className="text-slate-500 text-xs font-sans leading-relaxed">
            Leading the evolution of classic strategy gaming. Join the community and start your journey today.
          </p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Explore</h5>
          <ul className="text-slate-500 text-xs space-y-2 font-sans">
            <li className="hover:text-cyan-400 cursor-pointer">Trending Games</li>
            <li className="hover:text-cyan-400 cursor-pointer">Tournaments</li>
            <li className="hover:text-cyan-400 cursor-pointer">Leaderboards</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Support</h5>
          <ul className="text-slate-500 text-xs space-y-2 font-sans">
            <li className="hover:text-cyan-400 cursor-pointer">Help Center</li>
            <li className="hover:text-cyan-400 cursor-pointer">Community Guild</li>
            <li className="hover:text-cyan-400 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold text-xs tracking-widest uppercase">Newsletter</h5>
          <div className="flex">
            <input type="text" placeholder="Your Email" className="bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 text-xs w-full focus:outline-none focus:border-cyan-500 font-sans" />
            <button className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-r-lg font-bold text-xs">JOIN</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-[10px] font-sans">© 2024 PLAYSPHERE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 text-slate-500">
          {/* Social Placeholders */}
          <span className="hover:text-cyan-400 cursor-pointer transition-colors text-xs font-bold tracking-widest uppercase">Twitter</span>
          <span className="hover:text-cyan-400 cursor-pointer transition-colors text-xs font-bold tracking-widest uppercase">Discord</span>
          <span className="hover:text-cyan-400 cursor-pointer transition-colors text-xs font-bold tracking-widest uppercase">Youtube</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer   