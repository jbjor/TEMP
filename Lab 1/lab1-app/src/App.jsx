import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponent'
import SimpleFunctionalComponents from './components/SimpleFunctionalComponent'

const Student = {
  name: "John Doe",
  id: "123456",
  program: "Computer Science"
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SimpleFunctionalComponents />
    <SimpleClassComponents />

    </>
  )
}

export default App
