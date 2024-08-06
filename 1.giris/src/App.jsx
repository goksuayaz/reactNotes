import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = 15;
  const firstName = "Goksu";
  let vize1 = 60;
  let vize2 = 80;
  let sonuc = true;

  let isimler = [
    "Goksu",
    "Ali",
    "Veli",
    "Adem"
  ]

  return (

    <div>

      {/* <p> Ortalama : {(vize1 + vize2) / 2}</p>



      {sonuc ? <p> Ehliyeti alabilirsin </p> : <p> Ehliyeti alamazsın</p>}
      <p> a değişkenin değeri : {a} </p>
      <p> Müşterinin adı: {firstName} </p> */}


      {/* {
        (vize1 + vize2) / 2 >= 50 ? <p> Dersten geçtin aferin </p> : <p> kaldın geçmiş olsun </p> 
      } */}

      {/* {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'

          }} key={index}> {isim} </div>
        ))
      } */}


    </div>
  )
}

export default App
