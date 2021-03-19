// import { PropTypes } from "prop-types";

// import "./ProductDetails.css";

// function ProductDetails({
//   product,
//   inCart,
//   addToCart,
//   removeFromCart,
// }) {
//   const toggleCart = () => {
//     if (inCart(product)) {
//       removeFromCart(product.id);
//     } else {
//       addToCart(product.id);
//     }
//   };
//   return (
    
//       <div className="body">
       
//         {!!product ? (
//           <div className="content">
//             <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <button type="button" className="addToCart" onClick={toggleCart}>
//               {inCart ? "Remove to Cart -" : "Add to Cart +"}
//             </button>
//             <br />
//             <br />
//             <hr />
//             <div className="price">
//               <small>Price:</small> {product.price}€
//             </div>
//           </div>
//         ) : null}
//       </div>
    
//   );
// }

// ProductDetails.propTypes = {
//   product: PropTypes.object,
//   inCart: PropTypes.bool.isRequired,
//   addToCart: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired,
// };

// export default ProductDetails;