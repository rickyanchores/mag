import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Sections/Hero/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 className='header'>Mag.</h1>
      <Nav />
      <Hero />
    </div>
  )
}

export default App
