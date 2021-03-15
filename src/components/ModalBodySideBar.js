import "./ModalBodySideBar.css"
import { PropTypes } from "prop-types";



function ModalBodySideBar({
  isOpen,
  close,
  children
}) {
  
  return (
    <div className={`ModalBodySideBar ${isOpen ? `is-open` : ""}`}>
      <div className="ModalBodySideBar__overlay" onClick={close}></div>
      <div className="ModalBodySideBar__body">
        <header>        
          <button className="ModalBodySideBar__close" onClick={close}>
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
    close: PropTypes.func.isRequired,
    
  };
  
  export default ModalBodySideBar;