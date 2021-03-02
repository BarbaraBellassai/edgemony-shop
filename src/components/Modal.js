import React from 'react'
import "./Modal.css"


export default function Modal(props) {
    const {image, title, price, description} = props.data

    return  (
        <div className = "Modal">
            <div className = "Modal_overlay">
                <div className = "Modal_body">
                    <img src = {image} alt = "prod im"/>
                    <h3>{title}</h3> 
                    <h2>{description}</h2>
                    <span>{price}</span>
                    <button type = "button">X</button>
                </div>
            </div>
        </div>
    )
}
