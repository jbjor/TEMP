import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponent from './components/SimpleClassComponent'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponent'
import { Student, Teacher } from './components/helper'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import CounterWithoutHook from './components/hooks/CounterWithoutHook'
import CounterWithUseState from './components/hooks/CounterWithUseState'
import CounterWithUseEffect from './components/hooks/CounterWithUseEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <CounterWithoutHook/>
     <CounterWithUseState/>
     <CounterWithUseEffect/>

     <Routes>
      <Route path='/' element={<SimpleClassComponent/>}/>
      <Route path='/functional' element={<SimpleFunctionalComponent student={Student} teacher={Teacher} />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
