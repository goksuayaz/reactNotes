import { useState } from 'react'

import './App.css'
import Product from './Product'
import Container from './Container';

function App() {

  const productName = "Buzdolabı";


  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} />
      <Product productName={productName} price={15000} /> */}
      <Container >
        <Product productName="Masa" price={1200} />

        {/* Container.jsx te children yerine bu ozellıklerı yazdıracak */}
      </Container>

      {/* burada children product oluyor */}

    </div>
  )
}

export default App
