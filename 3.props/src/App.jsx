import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const productName = "Buzdolabı";
  return (
    // <div>
    //   <Product productName="Ayakkabı" price={3200}/>
    //   <Product productName="Çizme" price={5955}/>
    //   <Product productName={productName} price={16000}/>
    // </div>

    <div>
      <Container>
        <Product productName="Telefon" price={79000}/>
      </Container>
    </div>
  )
}

export default App
