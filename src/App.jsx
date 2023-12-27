import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home.jsx'; 
import About from './components/About/About'
import Portafolio from './components/Portafolio/Portafolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Portafolio/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
