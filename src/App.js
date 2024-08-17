import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Navbar from './component/Navbar'
import NoteState from './context/NoteState'
import Signup from './component/Signup'

const App = () => {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App