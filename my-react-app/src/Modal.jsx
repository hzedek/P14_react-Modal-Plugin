import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, fadeDuration = 300 }) => {
  // State to control whether the modal is visible or not
  const [show, setShow] = useState(isOpen);

  // Effect to control the modal's visibility based on the isOpen prop
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), fadeDuration);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, fadeDuration]);

  // If `show` is false, do not render anything (modal is hidden)
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: isOpen ? 1 : 0,
        }}
        // Prevent clicks inside the modal content from closing the modal
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {/* Render the children (content passed to the modal) */}
        {children}
      </div>
    </div>
  );
};

// Defining propTypes for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose must be a function and is required
  children: PropTypes.node.isRequired, // children can be any renderable content (React nodes)
  fadeDuration: PropTypes.number, // fadeDuration is optional and should be a number
};

export default Modal;
