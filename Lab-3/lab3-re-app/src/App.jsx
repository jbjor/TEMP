import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponent from './components/SimpleClassComponent'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponent'
import { Student, Teacher } from './components/helper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SimpleClassComponent/>
     <SimpleFunctionalComponent student={Student} teacher={Teacher} />

    </>
  )
}

export default App
