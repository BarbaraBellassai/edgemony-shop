import React from 'react'
import "./Modal.css"
import PropTypse from "prop-types"


export default function Modal({ productElements, isOpen, isClosed }) {
    

    return  (
        isOpen?
        <div className = "Modal">
            <div className = "Modal_overlay" onClick = {isClosed} >
                <div className = "Modal_body">
                    <img src = {productElements.image} alt = {productElements.title}/>
                    <h3>{productElements.title}</h3> 
                    <h2>{productElements.description}</h2>
                    <span>{productElements.price}</span>
                    <button type = "button"  onClick = {isClosed}>X</button>
                </div>
            </div>
        </div>
        : <></>
    )
}

Modal.propTypse ={
    product: PropTypse.object.isRequired,
    isOpen: PropTypse.bool.isRequired,
    closeModal: PropTypse.func.isRequired
}
