import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
    <h1>Counter App</h1>
    <br />
    <h2>Count: {count}</h2>
    <button
      onClick={() => setCount(count + 1)} 
    >
      Increment
    </button>
    <button onClick={() => setCount(count - 1 > 0 ? count - 1 : 0)} >
      Decrement
    </button>
   </>
  )
}

export default App
