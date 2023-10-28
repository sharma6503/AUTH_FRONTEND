import { useState } from 'react'

import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'

import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/login"element={<Login />}/>
      <Route path="/home"element={<Home />}/>
    </Routes>

    </>
  )
}

export default App
