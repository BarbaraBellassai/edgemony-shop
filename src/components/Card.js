import "./Card.css"
import Modal from "./Modal"
import React from 'react'
import {useState} from 'react'
import PropTypse from "prop-types"


function Card({ product,addProduct }) {

    const [modalIsOpen, setmodalIsOpen] = useState (false)
    
    function clickHandler() {
       
        setmodalIsOpen (true);
    }
    function closeModal() {
        setmodalIsOpen (false);
    }
    return(
         <div className = "Card">
                <div >
                    <img src ={product.image} alt = {product.title}/>
                    <h3> {product.title} </h3>
                    <div>€{product.price}</div>                           
                    <button type = "button" onClick = {clickHandler} >View Details</button>
                </div>
                <Modal 
                productElements = {product}
                isOpen = {modalIsOpen}
                isClosed = {closeModal}
                itemAddedToCart = {addProduct}/> 
           </div>
    )
}

Card.propTypes = {
    product : PropTypse.object.isRequired    
}

export default Card