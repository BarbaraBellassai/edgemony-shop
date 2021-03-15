import "./ModalBodySideBar.css"
import { PropTypes } from "prop-types";



function ModalBodySideBar({
  isOpen,
  onClose,
  children
}) {
  
  return (
    <div className={`ModalBodySideBar ${isOpen ? `is-open` : ""}`}>
      <div className="ModalBodySideBar__overlay" onClick={onClose}></div>
      <div className="ModalBodySideBar__body">
        <header>        
          <button className="ModalBodySideBar__close" onClick={onClose}>
            X
          </button>
          {children}
        </header>
       
      </div>
    </div>
  );
}

ModalBodySideBar.propTypes = {
    
   
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    
  };
  
  export default ModalBodySideBar;