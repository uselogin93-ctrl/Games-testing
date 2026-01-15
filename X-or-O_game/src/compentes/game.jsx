import React from 'react'

const Game = () => {
  return (
    <div className='w-[99%] h-[99%] flex justify-start items-start bg-transparent p-2.5'>
        <div className='w-75 h-100 flex flex-row justify-center items-center bg-indigo-200 ring-2 ring-indigo-700 rounded-lg shadow-2xs shadow-indigo-700'>
            <h3 className='text-xl font-bold'>X or O</h3>
            <button><NavLink to="/xo" className={(e) => { return e.isActive ? "text-indigo-700 font-bold text-[18px] transition-all duration-200" : "text-[#565D6DFF] transition-all duration-200 hover:text-indigo-600" }}>Play</NavLink></button>
        </div>
    </div>
  )
}

export default Game