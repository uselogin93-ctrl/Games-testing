import React from 'react'
import { useState, useRef } from 'react'

const Body = () => {
    const x="/X.png"
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
        if (boxvalue === x) {
            e.src = o
            e.value="O"
            setboxvalue(o)
            
        } else {
            e.src = x
            e.value="X"
            setboxvalue(x)
        }
    }
    return (
        <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
            <div className='w-[80%] h-[70%] grid grid-cols-3 grid-rows-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box1} className='w-full h-full' onClick={() => { handleboxclick(box1.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box2} className='w-full h-full' onClick={() => { handleboxclick(box2.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box3} className='w-full h-full' onClick={() => { handleboxclick(box3.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box4} className='w-full h-full' onClick={() => { handleboxclick(box4.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box5} className='w-full h-full' onClick={() => { handleboxclick(box5.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box6} className='w-full h-full' onClick={() => { handleboxclick(box6.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box7} className='w-full h-full' onClick={() => { handleboxclick(box7.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box8} className='w-full h-full' onClick={() => { handleboxclick(box8.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value="" ref={box9} className='w-full h-full' onClick={() => { handleboxclick(box9.current) }} />
                </div>
            </div>
        </div>
    )
}

export default Body