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
        if (boxvalue === x) {
            e.src = o
            e.value = "O"
            setboxvalue(o)
        } else {
            e.src = x
            e.value = "X"
            setboxvalue(x)
        }
    }

    useEffect(async () => {
        let v1 = await box1.currentvalue
        let v2 = await box2.current.value
        let v3 = await box3.current.value
        let v4 = await box4.current.value
        let v5 = await box5.current.value
        let v6 = await box6.current.value
        let v7 = await box7.current.value
        let v8 = await box8.current.value
        let v9 = await box9.current.value
        if (v1 == o && v2 == o && v3 == o && v4 == o && v5 == o && v6 == o && v7 == o && v8 == o && v9 == o ) {
            if (v1 == o && v2 == o && v3 == o) {
                alert("O is the win")
            } else if (v4 == o && v5 == o && v6 == o) {
               alert("O is the win")
            } else {
                alert("O is the win")
            }
        } else {
            if (v1 == y && v2 == y && v3 == y) {
                alert("Y is the win")
            } else if (v4 == y && v5 == y && v6 == y) {
               alert("Y is the win")
            } else {
                alert("Y is the win")
            }
        }
    }, [handleboxclick])

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