import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponent from './components/SimpleClassComponent'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponent'

const Student = {
  name: "John Doe",
  id: 1,
};

const Teacher = {
  id: 101,
  name: "Jane Smith",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SimpleClassComponent/>
     <SimpleFunctionalComponent student={{ ...Student, ...Teacher}}/>

    </>
  )
}

export default App
