import React, { useEffectEvent } from 'react'
import { useState, useEffect, useRef } from 'react'

const Body = () => {
    const x = "/X.png"
    const o = "/O.png"
    const [boxvalue, setboxvalue] = useState("x");

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();
    const box5 = useRef();
    const box6 = useRef();
    const box7 = useRef();
    const box8 = useRef();
    const box9 = useRef();

    const handleboxclick = (e) => {
        if (e.getAttribute("value") !== "n") return;

        if (boxvalue === "x") {
            e.src = o
            e.setAttribute("value", "o")
            setboxvalue("o")
        } else {
            e.src = x
            e.setAttribute("value", "x")
            setboxvalue("x")
        }
    }

    useEffect(() => {
        const v1 = box1.current.getAttribute("value")
        const v2 = box2.current.getAttribute("value")
        const v3 = box3.current.getAttribute("value")
        const v4 = box4.current.getAttribute("value")
        const v5 = box5.current.getAttribute("value")
        const v6 = box6.current.getAttribute("value")
        const v7 = box7.current.getAttribute("value")
        const v8 = box8.current.getAttribute("value")
        const v9 = box9.current.getAttribute("value")

        const checkWin = (v) => {
            return (
                (v1 === v && v2 === v && v3 === v) || // Row 1
                (v4 === v && v5 === v && v6 === v) || // Row 2
                (v7 === v && v8 === v && v9 === v) || // Row 3
                (v1 === v && v4 === v && v7 === v) || // Col 1
                (v2 === v && v5 === v && v8 === v) || // Col 2
                (v3 === v && v6 === v && v9 === v) || // Col 3
                (v1 === v && v5 === v && v9 === v) || // Diag 1
                (v3 === v && v5 === v && v7 === v)    // Diag 2
            )
        }

        if (checkWin("x")) {
            setTimeout(() => alert("X is the winner!"), 100)
        } else if (checkWin("o")) {
            setTimeout(() => alert("O is the winner!"), 100)
        }
    }, [boxvalue])

    return (
        <div className='w-full py-12 flex flex-col items-center justify-center gap-10 bg-slate-950 font-orbitron'>
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-white tracking-widest uppercase">
                    Game <span className="text-cyan-400">Arena</span>
                </h2>
                <div className="flex items-center gap-4 text-sm">
                    <div className={`px-4 py-1 rounded-full border transition-all ${boxvalue === 'x' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-800 text-slate-500'}`}>
                        PLAYER X TURN
                    </div>
                    <div className={`px-4 py-1 rounded-full border transition-all ${boxvalue === 'o' ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'border-slate-800 text-slate-500'}`}>
                        PLAYER O TURN
                    </div>
                </div>
            </div>
            <div className='relative p-1 rounded-2xl bg-linear-to-br from-cyan-500/20 to-purple-500/20'>
                <div className='grid grid-cols-3 gap-3 p-4 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-700 shadow-2xl'>
                    {[box1, box2, box3, box4, box5, box6, box7, box8, box9].map((ref, i) => (
                        <div key={i} className='w-24 h-24 md:w-32 md:h-32 flex justify-center items-center bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-95 group'>
                            <img
                                src="/bg.png"
                                value="n"
                                ref={ref}
                                className='w-[70%] h-[70%] object-contain opacity-0 group-hover:opacity-10 transition-opacity'
                                onClick={(e) => {
                                    e.target.classList.remove('opacity-0', 'group-hover:opacity-10');
                                    e.target.classList.add('opacity-100');
                                    handleboxclick(ref.current);
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500 rounded-tl-sm"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-500 rounded-tr-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-500 rounded-bl-sm"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500 rounded-br-sm"></div>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="group flex items-center gap-2 px-6 py-2 border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 rounded-lg transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                RESET MATCH
            </button>
        </div>
    )
}

export default Bbutton