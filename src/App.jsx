import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Slider from './components/Slider'
import Body from './components/Body'
import StripLine from './components/StripLine'
import Page2 from './components/Page2'
import Page3Slider from './components/Page3Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <StripLine/>
    <Body/>
    <Page2/>
    <Page3Slider/>
    </>
  )
}

export default App
