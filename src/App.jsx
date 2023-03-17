import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Emailverification from './assets/components/Emailverification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Emailverification />
    </div>
  )
}

export default App
