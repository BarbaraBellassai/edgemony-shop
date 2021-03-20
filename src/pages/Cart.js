import "./../components/Cart.css";
import { PropTypes } from "prop-types";
import CartProduct from "./../components/CartProduct";
import { formatPrice } from "../services/utils";
import {Link} from "react-router-dom";
import "./Cart.css"

function Cart({
  products,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  
  return (
    <div className="Cart">
        <div className="Cart__content">
          {products.length > 0 ? (
            products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
                setProductQuantity={setProductQuantity}
              />
            ))
          ) : (
            <p className="Cart__content__empty">The cart is empty</p>
          )}
        </div>
        <footer>
          <span>Total: {formatPrice(totalPrice)}</span>
          <Link to= {'/checkout'}><button type= "button">Go to checkout</button></Link>
        </footer>
    </div>  
  );
}

Cart.propTypes = {
    products: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductQuantity: PropTypes.func.isRequired,
  };
  
  export default Cart;