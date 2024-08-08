import React from 'react'

function Product(props) {
    const { productName, price } = props; // {productName: 'Ayakkabı', price:3200}
    return (
        <div>


            <div>
                ÜRÜN BİLGİERİ
            </div>


            <div>
                <div> İsim : {props.productName} </div>
                <div> Fiyat : {props.price} TL </div>
            </div>


        </div>
    )
}

export default Product