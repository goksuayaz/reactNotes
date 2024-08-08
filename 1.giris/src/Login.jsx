import React from 'react'


//componentin dısarısına yazılmalı
export const users = [
    {
        username: "enes",
        password: "1"
    },
    {
        username: "aysenur",
        password: "2"
    }
]

function Login() {
    //Fragment: içine bir şey yazmadan da parantezleri açabilirsin(div yerine)
    return (



        <div>
            <div>

                <p> Kullanıcı Adınız</p>
                <input type="text" />

            </div>


            <div>


                <p> Şifreniz </p>
                <input type="text" />
            </div>

            <button> Giriş Yap </button>

        </div>


    )
}

export default Login

//dısarı acıyoruz


//login component ini oldugu gibi dısarı acıyoruz export default ile

