import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/casestudies' element={<CaseStudies/>} />
      </Routes>
    </>
  )
}

export default App