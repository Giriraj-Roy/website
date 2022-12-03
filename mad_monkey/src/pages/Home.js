import React from 'react'
import About from '../components/About'
import Process from '../components/Process'
import ResultDriven from '../components/ResultDriven'
import Services from '../components/Services'
// import img1 from '../assets/astronaut.png'
import Whyus from '../components/Whyus'
import Numbers from '../components/Numbers'
import ContactUs from '../components/ContactUs'
import CaseStudies from '../components/CaseStudies'
import HomeComp from '../components/HomeComp'

const Home = () => {
  return (
    <div>
      <HomeComp/>
      <About/>
      <Services/>
      <Process/>
      <ResultDriven/>
      <Whyus/>
      <Numbers/>
      <CaseStudies/>
      <ContactUs/>
    </div>
  )
}

export default Home

