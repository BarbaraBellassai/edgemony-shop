import "./App.css";
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Items from '../src/components/Items'
import Footer from '../src/components/Footer'
import { useEffect } from "react"
import { useState } from "react";
import Loader from "../src/components/Loader"
import ErrorComponent from '../src/components/ErrorComponent'
import SearchBar from '../src/components/SearchBar'

const fakeProducts = require("./mocks/data/products.json");
const currentYear = new Date().getFullYear()

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
  company: 'SZH Inc.'
};

function App() {
  const [articles, setArticles] = useState(undefined);
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [retry, setRetry ] = useState(false)
  const [userInput, setInput] = useState("")
  const [userCartItems, setUserCartItems] = useState ([])

  function retryFnc() {
    setRetry (!retry)
  }

  function search(e) {
    console.log(e.target.value);
    const target = e.target.value;
    setInput(target);    
  }

  function addingToCart(obj) {
    return(
    setUserCartItems((userCartItems) => [
      ...userCartItems,{...obj}]))
    
  }

  useEffect(() => {
    setLoading(true)
    fetch ("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((result) => {
      const hasHerror = Math.random() > 0.5
      if (!hasHerror){
      setArticles(result)
      setLoading(false)
      setApiError('')
      } else {
        throw new Error ('Product server API call response error')
      }
    })
    .catch ((err) =>{
      setApiError(err.message)
      setLoading(false)
    })
    
  }, [retry])

  return (
    <div className="App">
      
      <Header logo = {data.logo} addedItem = {userCartItems}/>
      <main>
        <Hero cover = {data.cover} title = {data.title} description = {data.description}/>
      </main>
      
      <div>
        {articles && !apiError ? (
          <div>
            <SearchBar inputChange={userInput} searchInput= {search}/> 
          
            <Items items = {articles} userChoise={userInput} addingFnc = {addingToCart}/>
          </div>  
           
        
         ) : loading && (<Loader />)
        }
        {
          apiError && <ErrorComponent retryApi ={retryFnc} errMsg = {apiError}/>
        }
      </div>
      <div>
        <Footer company = {data.company} year = {currentYear}/>
      </div>     
    </div>
  );
}

export default App;
