import { useState } from 'react'
import styles from './App.module.css'

import {Navbar} from './components/Navbar/navbar';
import {Hero} from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Educate } from './components/Educate/Educate';
import { Focus } from './components/Focus/Focus';
import { PrevPort } from './components/PrevPort/PrevPort';
import { Contact } from './components/Contact/Contact';
import { Rating } from './components/Rating/Rating';
import { Background } from './components/Background/Background';
import { Dialog } from './components/Dialog/Dialog';

function App() {
  // const [count, setCount] = useState(0)
  const logoImg = '../src/assets/J.svg'
  return (
     
    <div className={styles.App}>      
      < Background />
      < Navbar />
      < Hero />
      < Focus />
      < Educate />
      < Skills />
      < PrevPort />
      < About />
      < Contact />
      < Dialog />

      < Rating />
    </div>
  )
}

export default App
