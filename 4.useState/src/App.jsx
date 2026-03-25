import { use, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('Ersin');
  const [lastName, setLastName] = useState(["Uluağaç", "Ağaçulu", "Serobra"]);

  // useState: hooks
  // useState: Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.

  const [count, setCount] = useState(0)

  const handleChange = () => {
    setFirstName("Arbores")
  }

  const artir = () => {
    setCount(count + 1)
  }

  console.log("component render edildi.")

  return (
    // <div>
    //   <div>
    //     {firstName} {lastName}
    //   </div>
    //   <div>
    //     {/* <button onClick={()=>{setFirstName("Recep")}}>İsmi Değiştir</button> */}
    //     <button onClick={handleChange}>İsmi Değiştir</button>
    //   </div>
    // </div>

    <div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={artir}>Artır</button>
      </div>
    </div>
  )
}

export default App
