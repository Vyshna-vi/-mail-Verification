import React, { useState } from 'react'
import axios, { Axios } from 'axios'

function Emailverification() {
    const [email, setemail] = useState("")
    async function Verify() {
        // alert("hai")
        let response = await axios.get("https://api.apilayer.com/email_verification/" + email, { headers: { apikey: "ikUWoNfLgCScsFlaPoEOhDspQFOa3HCr" } })
        console.log(response)
        response = response.data
        if (response.can_connect_smtp == true) {
            alert("Valid Email")
        } else {
            alert("Invalid Email")
        }
    }
    return (
        <div className='main'>
            <input type="email" placeholder='Enter Your Email' onChange={(e) => { setemail(e.target.value); console.log(email) }} value={email} /><br />
            <button onClick={Verify}>Verify</button>
            <p></p>
        </div>
    )
}

export default Emailverification