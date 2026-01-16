import React from 'react'
import { useState, useRef } from 'react'

const Body = () => {
    const [boxvalue, setboxvalue] = useState("x");

    const [box_1, setbox_1] = useState("");
    const [box_2, setbox_2] = useState("");
    const [box_3, setbox_3] = useState("");
    const [box_4, setbox_4] = useState("");
    const [box_5, setbox_5] = useState("");
    const [box_6, setbox_6] = useState("");
    const [box_7, setbox_7] = useState("");
    const [box_8, setbox_8] = useState("");
    const [box_9, setbox_9] = useState("");


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
        let x = "/X.png"
        let o = "/O.png"
        if (boxvalue === x) {
            e.src = o
            setboxvalue(o)
            // e.current.style.color="White"
            // e.current.style.backgroundColor="Black"
        } else {
            e.src = x
            setboxvalue(x)
            // e.current.style.color="White"
            // e.current.style.backgroundColor="Black"
        }
    }
    return (
        <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
            <div className='w-[80%] h-[70%] grid grid-cols-3 grid-rows-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_1} ref={box1} className='w-25 h-50' onClick={() => { handleboxclick(box1.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_2} ref={box2} className='w-25 h-50' onClick={() => { handleboxclick(box2.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_3} ref={box3} className='w-25 h-50' onClick={() => { handleboxclick(box3.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_4} ref={box4} className='w-25 h-50' onClick={() => { handleboxclick(box4.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_5} ref={box5} className='w-25 h-50' onClick={() => { handleboxclick(box5.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_6} ref={box6} className='w-25 h-50' onClick={() => { handleboxclick(box6.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_7} ref={box7} className='w-25 h-50' onClick={() => { handleboxclick(box7.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_8} ref={box8} className='w-25 h-50' onClick={() => { handleboxclick(box8.current) }} />
                </div>
                <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                    <img src="" value={box_9} ref={box9} className='w-25 h-50' onClick={() => { handleboxclick(box9.current) }} />
                </div>
            </div>
        </div>
    )
}

export default Body