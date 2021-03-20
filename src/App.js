import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import {postItemToCart, deleteItemFromCart,fetchCart} from "./services/api"

import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Loader from "./components/Loader";
// import ProductList from "./components/ProductList";
// // import ProductModal from "./components/ModalProduct";
 import ErrorBanner from "./components/ErrorBanner";
// import Modal from "./components/Modal";
// import { fetchProducts, fetchCatogories } from "./services/api";
// import Cart from "./components/Cart"
// import ModalBodySideBar from "./components/ModalBodySideBar"
// import ProductDetails from "./components/ProductDetails"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

let cartId

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Modal logic
  // const [productInModal, setProductInModal] = useState(null);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isCartOpen, setCartOpen] = useState(false);

  // function openProductModal(product) {
  //   console.log(product);
  //   setProductInModal(product);
  //   setModalIsOpen(true);
  // }

  // function closeModal() {
  //   setModalIsOpen(false);
  //   setTimeout(() => {
  //     setProductInModal(null);
  //   }, 500);
  // }

  // useEffect(() => {
  //   if (modalIsOpen || isCartOpen) {
  //     document.body.style.height = `100vh`;
  //     document.body.style.overflow = `hidden`;
  //   } else {
  //     document.body.style.height = ``;
  //     document.body.style.overflow = ``;
  //   }
  // }, [modalIsOpen, isCartOpen]);

  // API data logic
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [apiError, setApiError] = useState("");
  // const [retry, setRetry] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setApiError("");
  //   Promise.all([fetchProducts(), fetchCatogories()])
  //     .then(([products, categories]) => {
  //       setProducts(products);
  //       setCategories(categories);
  //     })
  //     .catch((err) => setApiError(err.message))
  //     .finally(() => setIsLoading(false));
  // }, [retry]);

  //Cart Logic
  const [cart, setCart] = useState([]);
  
  // const cartProducts = cart.map((cartItem) => {
  //   const { price, image, title, id } = [].find(
  //     (p) => p.id === cartItem.id
  //   );
  //   return { price, image, title, id, quantity: cartItem.quantity };
  // });
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  
  
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  async function addToCart(productId) {
    try{
      const cartObj = await postItemToCart(cartId, productId, 1)
      setCart(cartObj.items);
    }catch (error){
      console.error("postItemToCart API call error", error.message)
    }
  }
  async function removeFromCart(productId) {
    try{
      const cartObj = await deleteItemFromCart(cartId, productId)
      setCart(cartObj.items);
    }catch (error){
      console.error("deleteItemFromCart API call error", error.message)
    }
  }
  async function setProductQuantity(productId, quantity) {
    try{
      const cartObj = await postItemToCart(cartId, productId,quantity)
      setCart(cartObj.items);
    }catch (error){
      console.error("postItemToCart API call error", error.message)
    }
  }
  useEffect(() => {
   const cartIdFromLocalStorage = localStorage.getItem('edgemony-cart-id')
   async function fetchCartUpdate() {
     if (!cartIdFromLocalStorage){
       return
     }
     else{
       try{
         const cartObj = await fetchCart(cartIdFromLocalStorage)
         setCart(cartObj.items)
         cartId=cartObj.id
       } catch (error) {
         console.error('Error while parsing localStorage item' + error.message)
        }
      }
    }
    fetchCartUpdate()
  }, [])

  //Loader Logic & Error Banner Logic
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  return (
    <Router>

      <div className="App">
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart.length}
          
          // onCartClick={() => setCartOpen(true)}
        />
        {/* <Hero
          title={data.title}
          description={data.description}
          cover={data.cover}
        /> */}
        <main>
          {isLoading ? (
            <Loader />
          ) : apiError ? (
            <ErrorBanner
              message={apiError}
              close={() => setApiError("")}
              retry={() => setRetry(!retry)}
            />
          ) : (
            <Switch>
          <Route exact path="/">
            <Home isLoading = {isLoading} 
                  setIsLoading = {setIsLoading}
                  apiError = {apiError} 
                  setApiError = {setApiError}
                  retry = {retry} 
                  setRetry = {setRetry}/>
          </Route>
          <Route path="/products/:productId">
            <Product  inCart={isInCart}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}/>
          </Route>
          <Route path="/cart">
            <Cart products={cart}
                  totalPrice={cartTotal}
                  removeFromCart={removeFromCart}
                  setProductQuantity={setProductQuantity}/>
          </Route>
          <Route path="/checkout">
            <Checkout cartId={cartId} />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
            // <ProductList
            //   products={products}
            //   categories={categories}
            //   openProductModal={openProductModal}
            // />
          )}
        </main>
        {/* <Modal 
          isOpen={isCartOpen}
          close={() => setCartOpen(false)}>       
          
          <ModalBodySideBar 
            isOpen={isCartOpen}
            onClose={() => setCartOpen(false)}>

            <Cart
              products={cartProducts}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          </ModalBodySideBar>               
        </Modal>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}>
        <ModalBodySideBar
          isOpen={modalIsOpen}
          closeModal={closeModal}
          title={data.title}>
          
          <ProductDetails
          product={productInModal}
          inCart={isInCart(productInModal)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          />

        </ModalBodySideBar>
          
      </Modal>              */}
       
      </div>
      {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:productId">
            <Product  inCart={isInCart}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}/>
          </Route>
          <Route path="/cart">
            <Cart products={cart}
                  totalPrice={cartTotal}
                  removeFromCart={removeFromCart}
                  setProductQuantity={setProductQuantity}/>
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch> */}
      
    </Router>

  );
}

export default App;


