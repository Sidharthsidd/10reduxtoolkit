import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Addtodo/>
      <Todo/>
    </>
  )
}

export default App;