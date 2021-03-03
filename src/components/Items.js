import Card from './Card'
import "./Items.css"

function Items(props) {
    const {items} = props
    
    return (
        <div>
            <div className = "Card-Wrapper">
                {items.map((item)=>{
                    return(
                        <div>
                            <Card product={item}  
                            />
                        </div>
                    )
                    
                })}
            </div>    
        </div>
    )
}

export default Items