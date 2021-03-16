import PropTypes from "prop-types";

import HeaderCart from "./HeaderCart";
import "./Header.css";

function Header({ logo, title, cartTotal, cartSize, onCartClick }) {
  return (
    <header className="Header">
      <img src={logo} alt={title} />
      <HeaderCart
        cartTotal={cartTotal}
        cartSize={cartSize}
        
        onCartClick={onCartClick}
      />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
 
  onCartClick: PropTypes.func.isRequired,
};

export default Header;