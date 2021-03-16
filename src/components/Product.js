import { PropTypes } from "prop-types";

import "./Product.css";

import {Link} from "react-router-dom";

function Product({ product, openProductModal }) {
  return (
    <article className="Product">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <button ><Link to={`/products/${product.id}`}>View details</Link></button>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  //openProductModal: PropTypes.func.isRequired,
};

export default Product;