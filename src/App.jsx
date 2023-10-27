import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Hero from './components/Hero.jsx'
import Educate from './components/Educate/educate.jsx';

function App() {
  // const [count, setCount] = useState(0)
  const logoImg = '../src/assets/J.svg'
  return (
    <div>
      <section>          
        <div className='navbar'>
          <a href='#' className='hyperlink'>Home</a>
          <a href='#' className='hyperlink'>About Me</a>
          <a href='#' className='hyperlink'>Resume.pdf</a>
          <a href='#' className='hyperlink'>Portfolio</a>
          <a href='#' className='hyperlink'>Contact</a> 
          <div className='navlogo'>
            <img src={logoImg} className='logo'alt='Logo'></img>
            {/* <a href='./' className='logo' alt='Logo'></a> */}       
          </div>       
        </div>        
      </section>
      
      < Hero/>
      < Educate/>
    </div>
  )
}

export default App
