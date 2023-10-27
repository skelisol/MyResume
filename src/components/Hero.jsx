import React from 'react'
import '../App.css'


function Hero() {
    return(
        <section className='hero'>
            <div className='main'>
                {/* <h3>Hi, I'm</h3>         */}
                <h1><span>Hi, I'm </span>JARVIS TAYLOR</h1>
                <h2>Software/Web Developer</h2>
                <p>Let's show the world that magic still exists!!</p>
                <button> Contact Me </button>
            </div>
        </section>
    )
}

// hero = diagonal main = wrapper
export default Hero