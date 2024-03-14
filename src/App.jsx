import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {originals,actions,romance,horror,documentation} from './urls'
function App() {

  return(
    <>
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title="Netflix Originals"/>
    <Rowpost url={actions} title="Actions" image2/>
    <Rowpost url={romance} title="Romance" image2/>
    <Rowpost url={horror} title="Horror" image2/>
    <Rowpost url={documentation} title="Documentation" image2/>
    
    </>
  )
}

export default App
