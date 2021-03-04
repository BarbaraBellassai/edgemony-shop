import './ErrorComponent.css'
import React from 'react'



function ErrorComponent({apiError, retryApi}) {
   
    return(
        <div className = "errorBanner">
          <span>{ apiError }</span>
          <button className = "retryBtn" type="button" onClick={() => retryApi()}>Retry</button>
        </div>
    )
}

export default ErrorComponent