import React from 'react'
import { useState,useRef } from 'react'

const Body = () => {
  const [boxvalue, setboxvalue] = useState("x");
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();

  const handleboxclick = (e) => {
    let x="/X.png"
    let o="/O.png"
    if(boxvalue===x){
      e.src=o
      setboxvalue(o)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }else{
      e.src=x
      setboxvalue(x)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }
  }
  return (
    <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
        <div className='w-[80%] h-[70%] grid grid-cols-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box1} className='w-full h-full' onClick={() => {handleboxclick(box1.current)}}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box2} className='w-full h-full' onClick={() => {handleboxclick(box2.current)}}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box3} className='w-full h-full' onClick={() => {handleboxclick(box3.current)}}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box4} className='w-full h-full' onClick={() => {handleboxclick(box4.current)}}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box5} className='w-full h-full' onClick={() => {handleboxclick(box5.current)}}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <img src="" value={boxvalue} ref={box6} className='w-full h-full' onClick={() => {handleboxclick(box6.current)}}/>
            </div>
        </div>
    </div>
  )
}

export default Body