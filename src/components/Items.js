import Card from './Card'

function Items(props) {
    const {products} = props
    return (
        <div>
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
    )
}

export default Items