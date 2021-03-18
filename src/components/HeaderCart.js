import PropTypes from "prop-types";
import './HeaderCart.css'
import { formatPrice } from "../services/utils"
import {Link} from "react-router-dom";

function HeaderCart({ cartTotal, cartSize, onCartClick }) {
  return (
    <div className="HeaderCart">
      {!!cartSize && <span className="price">{formatPrice(cartTotal)}</span>}
      <span className="icon" onClick={onCartClick}>
      <Link to={"/cart"}><i className="fab fa-opencart"></i></Link>
        {!!cartSize && <span className="qty">{cartSize}</span>}
      </span>
    </div>
  );
}

HeaderCart.propTypes = {
  
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
