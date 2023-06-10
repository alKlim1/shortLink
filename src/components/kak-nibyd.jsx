import React from "react";
import axios from "axios";
import "./kak-nibyd.css";
export default function Form() {
    const [code, setCode] = React.useState("")
    const [link, setLink] = React.useState("")
    const [shortLink, setShortLink] = React.useState("")
    const sendData = () => {
     // setShortLink("abc")
        axios.post("https://024d-46-22-56-178.ngrok-free.app/s",{code:code,fullLink:link}).then(response=> {
         setShortLink("https://024d-46-22-56-178.ngrok-free.app/s/"+response.data.code)
        })
    }
    return (
        <div className="box">
            <div className="ramka">
                <div>
                    <h1> {code} </h1>
                    <input value={code} type={"text"} onChange={event => setCode(event.target.value)} placeholder={"код, для сокращения ссылки"}/>
                </div>
                <div>
                    <h1> {link} </h1>
                    <input value={link} type={"text"} onChange={event => setLink(event.target.value)} placeholder={"ваша ссылка"}/>
                </div>
                <div>
                    <button onClick={sendData}> получить короткую ссылку </button>
                    <a href={shortLink} >
                    {shortLink}
                    </a>
                </div>
            </div>
        </div>
    )
}
