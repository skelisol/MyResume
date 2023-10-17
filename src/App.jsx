import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div>
      <body>
          
        <div className='navbar'>
          <a href='#' className='hyperlink'>Home</a>
          <a href='#' className='hyperlink'>About Me</a>
          <a href='#' className='hyperlink'>Resume.pdf</a>
          <a href='#' className='hyperlink'>Portfolio</a>
          <a href='#' className='hyperlink'>Contact</a>        
        </div>
        <div className='navlogo'>
          {/* <img src='./src/assets/J.svg' className='logo'alt='Logo'></img> */}
          <a href='./' className='logo' alt='Logo'></a>
        </div> 
       
      </body>
    < Hero/>
    </div>
  )
}

export default App
