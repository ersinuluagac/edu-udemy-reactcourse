import { useState } from 'react'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {
  const { count, increase, decrease } = useCounter()
  const { open, change } = useToggle()
  return (
    <div>
      {open && <div>
        <div>{count}</div>
        <button onClick={increase}>Artır</button>
        <button onClick={decrease}>Azalt</button>
      </div>}
      <button onClick={change}>{open ? "Gizle" : "Göster"}</button>
    </div>
  )
}

export default App
