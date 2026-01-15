import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[99%] h-[10vh] flex flex-col justify-center items-center bg-indigo-500'>
      <div className="w-[49%] h-[99%] flex justify-start items-center">
        <h1 className='text-2xl font-bold'><li>
            <NavLink to="/" className="text-indigo-700 font-bold text-[18px] transition-all duration-200">PlaySphere</NavLink>
          </li>
        </h1>
      </div>
      <div className='w-[49%] h-[49%] flex justify-center items-center'>
        <ul className='w-[99%] h-[99%] flex flex-row justify-center items-center'>
          <li className='w-[33%] h-[99% text-center]'>
                <NavLink to="/" className={() => "text-indigo-900 transition-all duration-200 hover:text-indigo-600"}>Home</NavLink>
          </li>
          <li className='w-[33%] h-[99% text-center]'>
            <NavLink to="/game" className={() => "text-indigo-900 transition-all duration-200 hover:text-indigo-600"}>Games</NavLink>
          </li>
          <li className='w-[33%] h-[99% text-center]'>
            <NavLink to="/about" className={() => "text-indigo-900 transition-all duration-200 hover:text-indigo-600"}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar