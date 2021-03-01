import "./Card.css"
import Proptypse from "prop-types"


function Card(props) {
    const {image, title, price} = props
    return(
        <div className = "card-wrapper">
           <img src ={image} alt = "card im"/>
           <h3> {title} </h3>
           <span>{price}</span>
           <button>View Details</button>        
        </div>
    )
}

// Card.proptypes = {
//     image : Proptypse.string.isRequired, 
//     title : Proptypse.string.isRequired,
//     price : Proptypse.string.isRequired
// }
export default Card