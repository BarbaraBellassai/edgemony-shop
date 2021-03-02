import './Footer.css'
import Proptypse from "prop-types"

function Footer(props) {
    const {company, year} = props
    return(
        <footer>
            <span>{year} © {company}</span>
        </footer>
    )
}

Footer.proptypse = {
    //year : Proptypse.string.isRequired,
    company : Proptypse.string.isRequired 
}

export default Footer