import Card from './Card'
import "./Items.css"

function Items(props) {
    const {products} = props
    return (
        <div>
            <div className = "Card-Wrapper">
                {products.map((product)=>{
                    return(
                        <div>
                            <Card image = {product.image}
                                title = {product.title}
                                price = {product.price}  
                            />
                        </div>
                    )
                    
                })}
            </div>    
        </div>
    )
}

export default Items