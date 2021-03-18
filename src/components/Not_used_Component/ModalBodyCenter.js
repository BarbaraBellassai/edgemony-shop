// import "./ModalBodyCenter.css"
// import { PropTypes } from "prop-types";



// function ModalBodyCenter({
//   isOpen,
//   onClose,
//   title,
//   children
// }) {
  
//   return (
//     <div className={`ModalBodyCenter ${isOpen ? `is-open` : ""}`}>
//       <div className="ModalBodyCenter__overlay" onClick={onClose}></div>
//       <div className="ModalBodyCenter__body">
//         <header>  
//           <h3>{title}</h3>         
//           <button className="ModalBodyCenter__close" onClick={onClose}>
//             X
//           </button>
//           {children}
//         </header>
       
//       </div>
//     </div>
//   );
// }

// ModalBodyCenter.propTypes = {
    
   
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     title: PropTypes.string.isRequired
//   };