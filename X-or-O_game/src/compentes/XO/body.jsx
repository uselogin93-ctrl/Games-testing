import React from 'react'
import { useState,useEffect,useRef } from 'react'
import '../App.css'

const Body = () => {
  const [boxvalue, setboxvalue] = useState("X");
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();

  const handleboxclick = (e) => {
    let x="/X.png"
    let o="/O.png"
    if(!boxvalue===x){
      e.src=o
      setboxvalue(x)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }else{
      e.src=x
      setboxvalue(o)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }
  }
  return (
    <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
        <div className='w-[80%] h-[70%] grid grid-cols-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box1)} ref={box1} className='w-full h-full'/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box2)} ref={box2} className='w-full h-full'/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box3)} ref={box3} className='w-full h-full'/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box4)} ref={box4} className='w-full h-full'/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box5)} ref={box5} className='w-full h-full'/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue(box6)} ref={box6} className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Body