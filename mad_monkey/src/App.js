import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'

const App = () => {

  return (
    <div className=''>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/services' element={<Services/> } />
        <Route exact path='/casestudies' element={<CaseStudies/>} />
      </Routes>

    </div>
  )
}

export default App