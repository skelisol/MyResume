import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import {Navbar} from './components/Navbar/navbar';
import {Hero} from './components/Hero/Hero';

function App() {
  // const [count, setCount] = useState(0)
  const logoImg = '../src/assets/J.svg'
  return (
    
    <div className={styles.App}>
      < Navbar />
      < Hero />
      {/* < About/>
      < Skills />
      < Educate/>
      < Focus/>
      < PrevPort/>
      <Contact/>
      <Rating/> */}
    </div>
  )
}

export default App
