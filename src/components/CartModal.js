import React from 'react'

function CartModal({cartModalOpen,closeCartModal,userCartItems}) {
    return (
        cartModalOpen?
        <div>
            <header>
                <h2>Cart</h2>
                <button type = "button" onClick={closeCartModal}>Close</button>
            </header>
            <main>
                <div>
                    {userCartItems
                        .map((item) =>{
                            
                            return( 
                            <div>
                                <img src= {item.image} alt="{item.image}"/>
                                <h3>{item.title}</h3> 
                                <span>€{item.price}</span>
                            </div>   
                            )       
                                   
                        })
                        
                    } 
                    <div>Quantity: 1</div>      
                </div>
            </main>
        </div> : <></>
    )
}

export default CartModal
