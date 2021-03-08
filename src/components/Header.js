import "./Header.css"
import Proptypse from "prop-types"
import React from 'react'



function Header({logo,addedItem}) {
    console.log(addedItem)
    

    function addingPrice() {
        let TotalPrice = 0
        addedItem
            .map((productAdded) => (TotalPrice = TotalPrice + productAdded.price))
        

        return(
            TotalPrice
        )
    }    
    return (
       <header className = "Header">
        <img className = "Header-img" src = {logo} alt = "header logo"/>
        <div className = "Added_Item">
            <span>Your Cart</span>
            <span>{addedItem.length}</span>
        </div>
        <div className = "Item_Price">
            <span>Total Price</span>
            <span>{addingPrice()}</span>
        </div>
       </header>
    )  
}


Header.proptypse = {
    logo: Proptypse.string.isRequired
}

export default Header