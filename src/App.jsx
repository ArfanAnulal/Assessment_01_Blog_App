import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addblog from './components/Addblog'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
      </Routes>
    </>
  )
}

export default App
