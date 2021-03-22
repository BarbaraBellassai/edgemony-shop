// import React from 'react'
// import {useState} from 'react'
// import "./Checkout.css"
// import {updateCart} from "./../services/api"
 

// function Checkout({cartId}) {
//     const [firstName, setName] = useState("")  
//     const [surname, setSurname] = useState("") 
//     const [address, setAddress] = useState("")
//     const [email, setEmail] = useState("")

//     async function HandleOnSubmit(event) {
//         const userInput = {
//             firstName: firstName,
//             surname: surname,
//             address: address,
//             email: email
//         }
        
//         console.log("user input", userInput )
//         event.preventDefault()
//         try{
//             await updateCart(cartId,userInput)
           
//         }
//         catch (error){
//             console.error(error.message)
//         }

//     }
//     return (
//         <div>
//             <h2>Your Checkout Page</h2>
//             <div className="Checkout_Form">
//                 <form onSubmit={HandleOnSubmit}>
//                     <label>Please, enter your first name</label>
//                     <input 
//                         type="text"
//                         placeholder="i.e. :  John"
//                         value={firstName}
//                         onChange={(event)=>setName(event.target.value)}></input>
//                     <label>Please, enter your last name</label>
//                     <input 
//                         placeholder="i.e. : Doe"
//                         type="text"
//                         value={surname}
//                         onChange={(event)=>setSurname(event.target.value)}></input>
//                     <label>Please, enter your address</label>
//                     <input
//                         placeholder="i.e. : 10, Main St., LONDON"
//                         type="text"
//                         value={address}
//                         onChange={(event)=>setAddress(event.target.value)}></input>    
//                     <label>Please, enter your e-mail address</label>
//                     <input 
//                         placeholder="i.e. : john-doe@mymail.it"
//                         type="email"
//                         value={email}
//                         onChange={(event)=>setEmail(event.target.value)}></input>
//                     <button type="submit" >Validate your purchase</button>
                    
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Checkout
// primo tentativo di implementazione. Dava continuamente errore 400. Impossibile fixare. 

import React from "react";
import { useState } from "react";
import "./Checkout.css"
import { updateCart,createNewOrder,createNewCart } from "./../services/api";
function Checkout({cartId,newCart,setNewCart}) {
  const [dataInput, setDataInput] = useState({
    name: { value: "", modified: false },
    lastName: { value: "", modified: false },
    address: { value: "", modified: false },
    email: { value: "", modified: false },
  });
  function updateData(field) {
    return function (event) {
      setDataInput({
        ...dataInput,
        [field]: { value: event.target.value, modified: true },
      });
    };
  }
 async function onSubmit(event) {
     event.preventDefault();
    const data = Object.keys(dataInput).reduce(
      (acc, key) => ({
        ...acc,
        [key]: dataInput[key].value,
      }),
      {}
    );
    console.log(data);
    try{
        await updateCart(cartId,data)
        await createNewOrder(cartId)
        const result = await createNewCart()
        localStorage.setItem('edgemony-cart-id',JSON.stringify(result.id))
        setNewCart(JSON.parse(localStorage.getItem('edgemony-cart-id')))
    }
    catch(error){
        console.error(error.message)
    }
  }
  return (
    <div className="Checkout_Form">
      <form onSubmit={onSubmit}>
        <div>
          <label className="Checkout_Form label"htmlFor="name">Name</label>
          <input
            type="text"
            value={dataInput.name.value}
            name="name"
            id="name"
            onChange={updateData("name")}
            className={dataInput.name.modified ? "modified" : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={dataInput.lastName.value}
            name="lastName"
            id="lastName"
            className={dataInput.lastName.modified ? "modified" : ""}
            onChange={updateData("lastName")}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={dataInput.address.value}
            name="address"
            id="address"
            className={dataInput.address.modified ? "modified" : ""}
            onChange={updateData("address")}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={dataInput.email.value}
            name="email"
            id="email"
            className={dataInput.email.modified ? "modified" : ""}
            onChange={updateData("email")}
            required
          />
        </div>
        <button type="submit">Validate your purchase</button>
      </form>
    </div>
  );
}
export default Checkout;

