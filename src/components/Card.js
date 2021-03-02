import "./Card.css"
import Modal from "./Modal"
import React from 'react'
import {useState} from 'react'
//import Proptypse from "prop-types"


function Card(props) {
    const {image, title, price, description} = props

    const [modalIsOpen, setmodalIsOpen] = useState (false)
    
    function clickHandler() {
        {console.log("Il bottone funziona")}
        setmodalIsOpen (true);
    }
    return(
        !modalIsOpen ? (
        <div className = "Card">
           <img src ={image} alt = "card im"/>
           <h3> {title} </h3>
           <span>€{price}</span>
           <button type = "button" onClick = {clickHandler} >View Details</button>        
        </div>
        ) : <div>
                <div className = "Card">
                    <img src ={image} alt = "card im"/>
                    <h3> {title} </h3>
                    <span>€{price}</span>
                    <button type = "button" onClick = {clickHandler} >View Details</button>
                           
                </div>
                <Modal data = {props}/> 
           </div>
    )
}

// Card.proptypes = {
//     image : Proptypse.string.isRequired, 
//     title : Proptypse.string.isRequired,
//     price : Proptypse.string.isRequired
// }
export default Card