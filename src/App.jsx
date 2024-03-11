import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './components/ServiceList';
import Bio from './components/Bio';

function App() {
  const [ menu, setMenu ] = useState(false)

  const handleMenu = () => ((
      setMenu(prev => !prev)
  ))

  return (
    <div className={`${menu ? 'overflow-y-hidden' : 'overflow-y-scroll'} w-screen h-screen overflow-x-hidden bg-slate-100`}>
      <Navbar menu={menu} handleMenu={handleMenu} />
      <Hero />
      <Services />
      <Bio />
    </div>
  )
}

export default App
