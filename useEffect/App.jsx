import { useEffect } from 'react'
import './App.css'


function App() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');




    useEffect(() => {

        console.log("her zaman çalışır")
    })


    useEffect(() => {

        console.log("ilk render edildiğinde çalışır")

    }, [])


    useEffect(() => {
        console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çalışır")

    }, [firstName])



    useEffect(() => {
        console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır")
    }, [lastName])


    //adı değiştir butonuna bastıgımızda sadece her zaman çalışır olan ve firstname olan çalıştı.


    useEffect(() => {
        console.log("ilk render edildiğinde ve firstname veya lastname state değeri değiştiğinde çalışır")

    }, [firstName, lastName])


    //her iki butondan birine basınca yine çalıştı.



    //veritabanından ürünleri getir ve listele diceğimiz zaman boş arrayli metoda yazmalıyız.


    return (
        <div>
            <div> <button onClick={() => setFirstName("Enes")}> Adı Değiştir </button></div>
            <div> <button onClick={() => setLastName("Byrm")}> Soyadı Değiştir </button></div>

        </div>
    )
}

export default App