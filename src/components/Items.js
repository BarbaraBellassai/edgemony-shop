import Card from './Card'
import "./Items.css"

function Items({items,userChoise,addingFnc}) {    
    
    return (
        <div>
            <div className = "Card-Wrapper">
                {items
                .filter((item) =>{
                    return item.title.toUpperCase().includes(userChoise.toUpperCase()) || 
                    item.description.toUpperCase().includes(userChoise.toUpperCase())
                }
                )
                .map((item)=>{
                    return(
                        <div>
                            <Card key = {item.id} product={item} addProduct={addingFnc} 
                            />
                        </div>
                    )
                    
                })}
            </div>    
        </div>
    )
}

export default Items