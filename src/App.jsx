import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeaderSection from './components/HomePage'
import MirrorSection from './components/Works'
import DualFeatureSection from './components/Merchant'
import FourteenFeatures from './components/Category'
import FAQAccordion from './components/Faq'
import HeaderContactLocation from './components/Contact'

function App() {
 

  return (
      <>
      <Navbar/>
      <HeaderSection/>
   
      <MirrorSection/>
      <DualFeatureSection/>
      <FourteenFeatures/>
      
      <FAQAccordion/>
      <HeaderContactLocation/>
      </>
        
    
  )
}

export default App
