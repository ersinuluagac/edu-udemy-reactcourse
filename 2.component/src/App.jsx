import { useState } from 'react'
import './App.css'

import Login from './Login'
import { users as kullanici } from './Login'


function App() {
  console.log(kullanici)
  return (
    <div>
      <Login/>
      <hr />
      <Login/>
    </div>
  )
}

export default App
