import './ErrorComponent.css'
import React from 'react'
import {useState} from 'react'



function ErrorComponent({errMsg, retryApi}) {
    const [remBtn, setRemBtn ] = useState(false)
    return(
        !remBtn ?(
        <div className = "errorBanner">
          <span>{ errMsg }</span>
          <button className = "retryBtn" type="button" onClick={() => retryApi()}>Retry</button>
          <button className = "removeBtn" type="button" onClick={() => setRemBtn(true)}>Close</button>
        </div>) : <></>
    )
}

export default ErrorComponent