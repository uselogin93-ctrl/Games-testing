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
        if (boxvalue === "x") {
            e.src = o
            e.value = "o"
            setboxvalue("o")
        } else {
            e.src = x
            e.value = "x"
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
        <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
            <div className='w-[80%] h-[70%] grid grid-cols-3 grid-rows-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box1} className='w-full h-full' onClick={() => { handleboxclick(box1.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box2} className='w-full h-full' onClick={() => { handleboxclick(box2.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box3} className='w-full h-full' onClick={() => { handleboxclick(box3.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box4} className='w-full h-full' onClick={() => { handleboxclick(box4.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box5} className='w-full h-full' onClick={() => { handleboxclick(box5.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box6} className='w-full h-full' onClick={() => { handleboxclick(box6.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box7} className='w-full h-full' onClick={() => { handleboxclick(box7.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box8} className='w-full h-full' onClick={() => { handleboxclick(box8.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="/bg.png" value="n" ref={box9} className='w-full h-full' onClick={() => { handleboxclick(box9.current) }} />
                </div>
            </div>
        </div>
    )
}

export default Body