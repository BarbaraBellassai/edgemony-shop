import "./Header.css"
import Proptypse from "prop-types"


function Header(props) {
    const {logo} = props
    return (
       <header className = "Header">
        <img className = "Header-img" src = {logo} alt = "header logo"/>
       </header>
    )  
}

Header.proptypse = {
    logo: Proptypse.string.isRequired
}

export default Header