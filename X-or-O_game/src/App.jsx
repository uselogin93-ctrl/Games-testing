import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Navbar from './compentes/navbar'
import Footer from './compentes/footer'
import Mainbody from './compentes/main-body'
import Body from './compentes/XO/body'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Mainbody /><Footer /></>
    },
    {
      path:"/",
      element:<><Navbar /><Body /><Footer /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
