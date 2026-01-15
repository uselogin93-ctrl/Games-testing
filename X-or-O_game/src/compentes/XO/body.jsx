import React from 'react'
import { useState,useEffect,useRef } from 'react'

const Body = () => {
  const [boxvalue, setboxvalue] = useState("X");
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();

  const handleboxclick = (e) => {
    let x="X"
    let o="O"
    if(!boxvalue===x){
      setboxvalue(o)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }else{
      setboxvalue(x)
      // e.current.style.color="White"
      // e.current.style.backgroundColor="Black"
    }
  }
  return (
    <div className='w-[99%] h-[99%] flex justify-center items-center bg-transparent p-2.5'>
        <div className='w-[80%] h-[70%] grid grid-cols-3 justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box1" value={boxvalue} ref={box1} className='text-xl font-bold' onClick={handleboxclick(box1)}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box2" value={boxvalue} ref={box2} className='text-xl font-bold' onClick={handleboxclick(box2)}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box3" value={boxvalue} ref={box3} className='text-xl font-bold' onClick={handleboxclick(box3)}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box4" value={boxvalue} ref={box4} className='text-xl font-bold' onClick={handleboxclick(box4)}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box5" value={boxvalue} ref={box5} className='text-xl font-bold' onClick={handleboxclick(box5)}/>
            </div>
            <div className='w-[99%] h-[99%] flex justify-center items-center bg-indigo-100 ring-2 ring-indigo-700 rounded-lg shadow-xs shadow-indigo-700'>
                <input type="text" name="box6" value={boxvalue} ref={box6} className='text-xl font-bold' onClick={handleboxclick(box6)}/>
            </div>
        </div>
    </div>
  )
}

export default Body