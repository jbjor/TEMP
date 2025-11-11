import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponent'
import SimpleFunctionalComponents from './components/SimpleFunctionalComponent'
import { Student, Teacher } from ./components/helper.js

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      SimpleClassComponent
    </>
  )
}

export default App
