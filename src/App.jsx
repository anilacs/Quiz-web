import { useState } from 'react'
import './index.css'
import Quiz from './components/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz/>
    </>
  )
}

export default App