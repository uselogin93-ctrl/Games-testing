import React from 'react'
import { NavLink } from 'react-router-dom'

const Game = () => {
  return (
    <div className='w-[99%] h-[99%] flex justify-start items-start bg-transparent p-2.5'>
        <div className='w-75 h-100 flex flex-col justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700 p-2.5 gap-1'>
            <img src="" className='w-[99%] h-[70%] ' />
            <h3 className='text-xl font-bold w-[99%] h-[10%]'>X or O</h3>
            <button className='w-[99%] h-[20%] flex justify-center items-center bg-indigo-200 ring-2 ring-indigo-400 rounded-lg shadow-xs shadow-indigo-400'><NavLink to="/xo">Play</NavLink></button>
        </div>
    </div>
  )
}

export default Game