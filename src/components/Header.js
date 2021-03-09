import "./Header.css"
import Proptypse from "prop-types"
import React from 'react'
import HeaderCart from '../components/HeaderCart'



function Header({logo,addedItem,openCartModal}) {
    console.log(addedItem)

    
    return (
       <header className = "Header">
        <img className = "Header-img" src = {logo} alt = "header logo"/>
        <HeaderCart cartElement= {addedItem} openCartModal={openCartModal}/>
        
       </header>
    )  
}


Header.proptypse = {
    logo: Proptypse.string.isRequired
}

export default Header