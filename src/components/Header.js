import PropTypes from "prop-types";

import HeaderCart from "./HeaderCart";
import "./Header.css";

import {Link} from "react-router-dom";

function Header({ logo, title, cartTotal, cartSize}) {
  return (
    <header className="Header">
      <Link to={"/"}><img src={logo} alt={title} /></Link>
      <HeaderCart
        cartTotal={cartTotal}
        cartSize={cartSize}
        
        // onCartClick={onCartClick}
      />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
 
  //onCartClick: PropTypes.func.isRequired,
};

export default Header;