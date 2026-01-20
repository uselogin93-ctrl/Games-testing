import React from 'react'

const About = () => {
  const features = [
    { title: 'Global Arena', desc: 'Compete with players from all around the world in real-time matches.' },
    { title: 'Cyber Security', desc: 'Your data and gaming progress are protected with state-of-the-art encryption.' },
    { title: 'Pro Rewards', desc: 'Unlock exclusive skins, badges, and features by joining our Pro tier.' },
  ];

  return (
    <div className="w-[98%] min-h-[85vh] bg-slate-950 flex flex-col items-center py-20 px-6 font-orbitron">
      <div className="max-w-4xl w-full space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-white tracking-widest">ABOUT <span className="text-cyan-400">PLAYSPHERE</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed font-sans">
            PlaySphere is a cutting-edge gaming platform dedicated to bringing classic strategy games into the digital age. Built for performance, security, and ultimate fun.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-slate-800 space-y-4 group hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-1 rounded bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-slate-500 text-sm font-sans leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative p-1 rounded-3xl bg-linear-to-r from-cyan-500 to-purple-500">
          <div className="bg-slate-900 rounded-[22px] p-10 text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">READY TO JOIN THE ELITE?</h3>
            <p className="text-slate-400 font-sans">Thousands of players are waiting for your challenge. Create your legend today.</p>
            <button className="px-10 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all transform hover:scale-105">
              GET STARTED NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About