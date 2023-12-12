import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/HeroSection/Herosection'
import Card from './Components/Card/Card'


function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Card />
    </>
  )
}

export default App