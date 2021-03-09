import React from 'react'

function HeaderCart({cartElement,openCartModal}) {
   
    function addingPrice() {
        let TotalPrice = 0
        cartElement
            .map((productAdded) => (TotalPrice = TotalPrice + productAdded.price))
        

        return(
            TotalPrice
        )
    }    


    return(
        <div>
            <div className = "Added_Item">
                <button type='button' onClick={openCartModal} ><i className="fab fa-opencart"></i></button>
                <span>{cartElement.length}</span>
                
            </div>
            <div className = "Item_Price">
                <span>Total Price</span>
                <span>{addingPrice().toFixed(2)}</span>
            </div>
        </div>    
    )
}

export default HeaderCart