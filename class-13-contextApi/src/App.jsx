import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/section'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar>
        <h1>this is navbar</h1>
      </Navbar>
      <Section>
        <h1>welcom!</h1>
        <h2>guys</h2>
      </Section>
      <Footer/>
    </div>
  )
}

export default App