import Card from './Card'
import "./Items.css"

function Items({items,userChoise}) {    
    
    return (
        <div>
            <div className = "Card-Wrapper">
                {items
                .filter((item) =>{
                    return item.title.includes(userChoise) || item.description.includes(userChoise)
                }
                )
                .map((item)=>{
                    return(
                        <div>
                            <Card key = {item.id} product={item}  
                            />
                        </div>
                    )
                    
                })}
            </div>    
        </div>
    )
}

export default Items