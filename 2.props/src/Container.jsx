import React from 'react'

function Container({ children }) {

    // children dediğimizde product ı alıyoruz
    return (
        <div>
            <div>Container</div>
            {children}
        </div>
    )
}

export default Container