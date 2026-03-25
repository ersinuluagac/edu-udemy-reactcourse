import { use, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("Her zaman çalışır.")
  })
  useEffect(() => {
    console.log("İlk render edildiğinde çalışır.")
  }, [])
  useEffect(() => {
    console.log("İlk render edildiğinde ve 'firstName' state değeri değiştiğinde çalışır.")
  }, [firstName])
  useEffect(() => {
    console.log("İlk render edildiğinde ve 'lastName' state değeri değiştiğinde çalışır.")
  }, [lastName])

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Ersin")}>Adı değiştir.</button>
        <button onClick={() => setLastName("Uluağaç")}>Soyadı değiştir.</button>
      </div>
    </div>
  )
}

export default App
