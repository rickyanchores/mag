import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Sections/Hero/Hero'
import Shop from './Sections/Shop/Shop'
import About from './Sections/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 className='header'>Mag.</h1>
      <Nav />
      <Hero />
      <Shop />
      <About />
    </div>
  )
}

export default App
