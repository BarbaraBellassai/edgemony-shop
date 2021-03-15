import "./Modal.css"
import { PropTypes } from "prop-types";



function Modal({
  isOpen,
  close,
  children
}) {
  
  return (
    <div className={`Modal ${isOpen ? `is-open` : ""}`}>
      <div className="Modal__overlay" onClick={close}></div>
      <div className="Modal__body">
        <header>        
          <button className="Modal__close" onClick={close}>
            X
          </button>
          {children}
        </header>
       
      </div>
    </div>
  );
}

Modal.propTypes = {
    
   
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    
  };
  
  export default Modal;