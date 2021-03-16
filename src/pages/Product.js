import React from 'react'
import {fetchProduct} from "./../services/api";
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"


function Product() {
    const [product, setProduct] = useState (null)
    let {productId} = useParams()
    useEffect(()=> {
        fetchProduct(productId)
        .then ((product) =>{
            setProduct (product)
        })
    },[productId])
    return (
        <div className="body">
       
        {product ? (
          <div className="content">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* <button type="button" className="addToCart" onClick={toggleCart}>
              {inCart ? "Remove to Cart -" : "Add to Cart +"}
            </button> */}
            <br />
            <br />
            <hr />
            <div className="price">
              <small>Price:</small> {product.price}€
            </div>
          </div>
        ) : null}
      </div>
    )
}

export default Product
