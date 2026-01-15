import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Navbar from './compentes/navbar'
import Footer from './compentes/footer'
import Mainbody from './compentes/main-body'
import About from './compentes/about'
import Game from './compentes/game'
import Body from './compentes/XO/body'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<div className='w-screen h-screen bg-indigo-400 text-indigo-900 flex flex-row justify-start items-center'><Navbar /><Mainbody /><Footer /></div>
    },
    {
      path:"/about",
      element:<div className='w-screen h-screen bg-indigo-400 text-indigo-900 flex flex-row justify-start items-center'><Navbar /><About /><Footer /></div>
    },
    {
      path:"/game",
      element:<div className='w-screen h-screen bg-indigo-400 text-indigo-900 flex flex-row justify-start items-center'><Navbar /><Game /><Footer /></div>
    },
    {
      path:"/xo",
      element:<div className='w-screen h-screen bg-indigo-400 text-indigo-900 flex flex-row justify-start items-center'><Navbar /><Body /><Footer /></div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
