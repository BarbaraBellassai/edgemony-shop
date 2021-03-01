import "./Hero.css"
import Proptypse from "prop-types"


function Hero(props) {
    const {title, cover, description} = props
    return (
       <div className = "hero">
           <h1>{title}</h1>        
           <img src = {cover} alt = "hero"/>
           <h2>{description}</h2>
        </div>
    )  
}

Hero.proptypse = {
    title: Proptypse.string.isRequired,
    cover: Proptypse.string.isRequired,
    description: Proptypse.string.isRequired
}

export default Hero