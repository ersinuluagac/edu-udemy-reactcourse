import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // JavaScript kodları buraya yazılır.
  let a = "Ersin"
  let b = 1995

  return (
    // HTML kodları buraya yazılır.
    <div>Merhaba, {a}! Doğum yılın: {b}</div> // HTML içinde JS birleştiren JSX örneği.
  )
}

export default App
